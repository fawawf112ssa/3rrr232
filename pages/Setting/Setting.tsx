import { FormEvent, useState, MouseEvent, useEffect, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import useClipboard from 'react-use-clipboard';

import { diamondIcon, googleAuthIcon, logo } from 'constants/images';
import {
  Main,
  Form,
  Input,
  InputWrap,
  Title,
  Wrapper,
  InfoBlock,
  UserInfo,
  UserInfoSubtitle,
  UserInfoTitle,
  ReferalHref,
  ReferalInfo,
  ReferalTitle,
  ControlBlock,
  SubmitBtn,
  TableBlock,
  TabBtn,
  Tabs,
  CardBlock,
  Select,
  CardWrap,
  UpdatePassBtn,
  ReferalInput,
  ReferalLabel,
  ReferalButton,
  InputFileWrapp,
  InputFile,
  LogoImage,
  ReferalWrap,
  ReferalText,
} from './Setting.styled';
import { TableMenuEnum, settingTableMenu } from 'constants/menu';
import { BasicModal } from 'modules/components/Modal/Modal';
import { QRCodeScaner } from 'modules/components/Modal/QRCodeScaner/QRCodeScaner';
import { useModal } from 'hooks/useModal';
import { useResize } from 'hooks/useResize';
import {
  useActiveReferalMutation,
  useGetRefCodeUserQuery,
  useGetRefStatsQuery,
  useLazyCreate2faQuery,
  useUpdatePasswordMutation,
} from 'services';
import { Loader } from 'modules/components/Loader/Loader';
import { useAppDispatch, useAppSelector } from 'store';
import { notifySelector, userSelector } from 'store/selectors';
import { uploadIconFile } from 'services/api/fileApi';
import { Notification } from 'modules/components/Notification/Notification';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/notify';
import { LongTable } from './TableBlocks/LongTable';
import { RouletteTable } from './TableBlocks/RouletteTable';
import { LongGrid } from './GridBlock/LongGrid';
import { RouletteGrid } from './GridBlock/RouletteGrid';
import { WalletTable } from './TableBlocks/WalletTable';
import { Navigate } from 'react-router-dom';
import { BXETable } from './TableBlocks/BXETable';
import { BXEGrid } from './GridBlock/BXEGrid';

export enum Statuses {
  FAIL = 'fail',
  OK = 'ok',
}

export const SettingPage = () => {
  const dispatch = useAppDispatch();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [filter, setFilter] = useState<TableMenuEnum>(settingTableMenu[0]);
  const [newPass, setNewPass] = useState('');
  const [newRepeatPass, setNewRepeatPass] = useState('');
  const [referalInput, setReferalInput] = useState('');
  const [logoUrl, setLogoUrl] = useState(diamondIcon.orange);
  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);
  const { user } = useAppSelector(userSelector);
  const [regData, setRegData] = useState<{ day: number; month: number; year: number } | null>(null);
  const { t } = useTranslation();
  const [windowWidth] = useResize();
  const { data: referalCode } = useGetRefCodeUserQuery(null);
  const { data: referalStats } = useGetRefStatsQuery(null);
  const [isCopied, setCopied] = useClipboard(referalCode?.code ?? '');
  const [fetchUpdatePassword, { isLoading: isLoadingPass }] = useUpdatePasswordMutation();
  const [fetchActivateCode, { data: referalData, isSuccess: isSuccessReferal }] =
    useActiveReferalMutation();

  const [fetch2fa, { data: data2fa, isLoading: isLoading2fa }] = useLazyCreate2faQuery();

  useEffect(() => {
    if (user === null) {
      return;
    }

    const date = new Date(Date.parse(user.reg_date));
    setRegData({
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    });

    if (user.logo !== null) {
      setLogoUrl(user.logo);
    }
  }, [user]);

  useEffect(() => {
    if (referalCode === null) {
      return;
    }
  });

  useEffect(() => {
    if (!(isSuccessReferal && referalData)) {
      return;
    }

    switch (referalData.result) {
      case Statuses.OK:
        dispatch(openNotify(alertMessage.crashSuccess));
        break;

      case Statuses.FAIL:
        dispatch(openNotify({ message: referalData.details as string, type: 'error' }));
        break;

      default:
        break;
    }
  }, [isSuccessReferal]);

  const updateFilter = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    setFilter(id as unknown as TableMenuEnum);
  };

  const handleUpdatePass = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!newPass) {
      return;
    }

    await fetchUpdatePassword({ passwd: newPass });
  };

  const handleActivateCode = async () => {
    await fetchActivateCode({ code: referalInput });
  };

  const handleUploadLogo = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const formData = new FormData();

    if (!files || !files.length) return;
    const file = files[0];
    formData.append('file', file);

    dispatch(uploadIconFile(formData));
  };

  const handleGoogleAuth = () => {
    fetch2fa(null);
  };

  useEffect(() => {
    if (data2fa && data2fa.result === 'created') {
      openModal();
    }
  }, [data2fa]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  const renderTableBlock = () => {
    switch (filter) {
      case TableMenuEnum.TRANS_HISTORY:
        return <WalletTable />;

      case TableMenuEnum.LONG_STATS:
        return <LongTable />;

      case TableMenuEnum.FUTURE_STATS:
        return <></>;

      case TableMenuEnum.BXE_STATS:
        return <BXETable />;

      case TableMenuEnum.ROULETTE_STATS:
        return <RouletteTable />;

      default:
        return <></>;
    }
  };

  const renderGridBlock = () => {
    switch (filter) {
      case TableMenuEnum.TRANS_HISTORY:
        return <></>;

      case TableMenuEnum.LONG_STATS:
        return <LongGrid />;

      case TableMenuEnum.FUTURE_STATS:
        return <></>;

      case TableMenuEnum.BXE_STATS:
        return <BXEGrid />;

      case TableMenuEnum.ROULETTE_STATS:
        return <RouletteGrid />;

      default:
        return <></>;
    }
  };

  if (user === null) return <Navigate to={'/'} />;

  return (
    <Main>
      {(isLoadingPass || isLoading2fa) && <Loader />}
      <Notification isOpenNotify={isOpenNotify} notifyMessage={notifyMessage} />
      <Title>{t('setting')}</Title>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <InputFileWrapp>
            <InputFile type="file" onChange={handleUploadLogo} />
            <LogoImage src={logoUrl} />
          </InputFileWrapp>
          <InputWrap>
            <Input
              placeholder={t('enterNewPass')}
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <Input
              placeholder={t('repeatNewPassword')}
              value={newRepeatPass}
              onChange={(e) => setNewRepeatPass(e.target.value)}
            />
            <UpdatePassBtn onClick={handleUpdatePass}>{t('updatePass')}</UpdatePassBtn>
          </InputWrap>
          <InfoBlock>
            <UserInfo>
              <div>
                <UserInfoTitle>{t('username')}</UserInfoTitle>
                <UserInfoSubtitle>{user !== null ? user.nick : ''}</UserInfoSubtitle>
              </div>
              <div>
                <UserInfoTitle>{t('registrationDate')}</UserInfoTitle>
                {regData !== null && (
                  <UserInfoSubtitle>
                    <span>{regData.day}</span>
                    <span>/</span>
                    <span>{regData.month}</span>
                    <span>/</span>
                    <span>{regData.year}</span>
                  </UserInfoSubtitle>
                )}
              </div>
              <div>
                <UserInfoTitle>
                  {t('level')}: {referalStats?.level ?? ''}
                </UserInfoTitle>
                <UserInfoTitle style={{ marginTop: '0.15rem' }}>
                  {t('referals')}: {referalStats?.total ?? ''}
                </UserInfoTitle>
              </div>
            </UserInfo>
            <ReferalInfo>
              <ReferalWrap>
                <ReferalText>{t('myCode')}</ReferalText>
                <ReferalHref onClick={setCopied}>{referalCode?.code ?? ''}</ReferalHref>
              </ReferalWrap>
              <ReferalWrap>
                <ReferalText>{t('enterCode')}</ReferalText>
                <ReferalLabel>
                  <ReferalInput
                    value={referalInput}
                    onChange={(e) => setReferalInput(e.target.value)}
                  />
                  <ReferalButton onClick={handleActivateCode} />
                </ReferalLabel>
              </ReferalWrap>
              <ReferalTitle>
                <p>{t('referalProgram')}</p>
                <img src={logo} alt="logo" />
              </ReferalTitle>
            </ReferalInfo>
          </InfoBlock>
          <ControlBlock>
            <SubmitBtn onClick={handleGoogleAuth}>
              <img src={googleAuthIcon} />
              <p>{t('googleAuth')}</p>
            </SubmitBtn>
            <BasicModal open={isOpenModal} handleClose={closeModal}>
              <>
                <QRCodeScaner closeModal={closeModal} details={data2fa?.details} />
              </>
            </BasicModal>
          </ControlBlock>
        </Form>
        {windowWidth > 767 ? (
          <TableBlock>
            <Tabs>
              {settingTableMenu.map((item) => (
                <TabBtn
                  key={item}
                  id={item}
                  onClick={updateFilter}
                  className={item === filter ? 'active' : ''}
                >
                  {t(item)}
                </TabBtn>
              ))}
            </Tabs>
            {renderTableBlock()}
          </TableBlock>
        ) : (
          <CardBlock>
            <Select
              onChange={(e) => setFilter(e.target.value as unknown as TableMenuEnum)}
              value={filter}
            >
              {settingTableMenu.map((item) => (
                <option key={item} value={item}>
                  {t(item)}
                </option>
              ))}
            </Select>
            <CardWrap>{renderGridBlock()}</CardWrap>
          </CardBlock>
        )}
      </Wrapper>
    </Main>
  );
};

export default SettingPage;
