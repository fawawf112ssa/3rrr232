import { useTranslation } from 'react-i18next';

import { List } from 'modules/components/List/List';
import {
  Wrapper,
  listRouletteData,
  ControlBlock,
  InfoBlock,
  Button,
  Long,
  InGameUser,
  InfoWrap,
  InGameAmount,
  listRouletteUserData,
  UserAmount,
  UserName,
  NoBids,
  NoBidsSubtitle,
  NoBidsTitle,
  MobControls,
  MobButtonsWrap,
  InputWrap,
  Label,
  Input,
  UserCoin,
} from './Controls.styled';
import { DiamondType, RouletteList, rouletteList } from 'data/roulette';
import { diamondIcon, noBidsIcon } from 'constants/images';
import { useResize } from 'hooks/useResize';
import { BetsInfo, Gem, gemData, setCryptoActive } from 'store/reducers/gameSlice';
import { useAppDispatch, useAppSelector } from 'store';
import { gameSelector, notifySelector } from 'store/selectors';
import { cryptoArr } from 'constants/crypto';
import { CryptoBtn } from 'modules/components/CryptoBtn/CryptoBtn';
import { CriptoEnum } from 'store/reducers/currencySlice';
import { MouseEvent, useEffect } from 'react';
import { criptoListCss } from 'modules/components/Bet/Bet.styled';
import { Notification } from 'modules/components/Notification/Notification';
import { openNotify } from 'store/reducers/notifySlice';
import { useRouletteBetMutation } from 'services';
import { alertMessage } from 'constants/notify';
import { Avatar } from '@mui/material';

export enum CrashStatuses {
  OK = 'ok',
  FAIL = 'fail',
}

export const Controls = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [width] = useResize();
  const {
    gameInfo: { roulette },
    rouletteBet,
    criptoActive,
  } = useAppSelector(gameSelector);
  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);
  const [fetchBet, { data: dataBet, isSuccess: isSuccessBet }] = useRouletteBetMutation();

  const handleBet = async (gem: Gem) => {
    if (!rouletteBet) {
      return;
    }

    await fetchBet({
      bet: Number(rouletteBet),
      coin: criptoActive,
      gem: gem,
    });
  };

  useEffect(() => {
    if (!(isSuccessBet && dataBet)) {
      return;
    }

    switch (dataBet.result) {
      case CrashStatuses.OK:
        dispatch(openNotify(alertMessage.crashSuccess));
        break;

      case CrashStatuses.FAIL:
        dispatch(openNotify({ message: dataBet.details as string, type: 'error' }));
        break;

      default:
        break;
    }
  }, [isSuccessBet]);

  const renderItem = ({ gem, x }: RouletteList) => {
    const renderItemUser = (item: BetsInfo) => (
      <>
        <Avatar sx={{ width: 24, height: 24 }} alt={item.nickname} src={item.logo} />
        <UserName>{item.nickname}</UserName>
        <UserCoin>{item.coin}</UserCoin>
        <UserAmount className={gemData[gem]}>{item.value}</UserAmount>
      </>
    );

    const renderEmpty = (
      <NoBids>
        <img src={noBidsIcon} alt="no" />
        <NoBidsTitle>{t('noBids')}</NoBidsTitle>
        <NoBidsSubtitle>{t('beTheFirst')}</NoBidsSubtitle>
      </NoBids>
    );

    if (roulette === null) {
      return <></>;
    }

    return (
      <>
        {width >= 767 && (
          <ControlBlock className={gemData[gem]}>
            <img src={diamondIcon[gemData[gem] as DiamondType]} alt="" />
            <Button onClick={() => handleBet(gem)}>
              <span>$ {Number(rouletteBet) * x}</span>
              <span>{t('bet')}</span>
            </Button>
            <Long>x{x}</Long>
          </ControlBlock>
        )}
        <InfoBlock>
          <InfoWrap>
            <InGameUser className={gemData[gem]}>
              {roulette.bets.bets_gems !== null ? roulette.bets.bets_gems[gem] : 0}{' '}
              {t('participates')}
            </InGameUser>
            <InGameAmount>
              {t('amount')}:{' '}
              {roulette.bets.bets !== null
                ? roulette.bets.bets
                    .filter((item) => item.gem === gem)
                    .reduce((acc, i) => acc + i.value, 0)
                : 0}
              $
            </InGameAmount>
          </InfoWrap>
          <List
            data={roulette.bets.bets.filter((item) => item.gem === gem)}
            renderItem={renderItemUser}
            renderEmpty={renderEmpty}
            styles={listRouletteUserData}
          />
        </InfoBlock>
      </>
    );
  };

  const handleActiveCripto = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id as CriptoEnum;

    dispatch(setCryptoActive(id));
  };

  const renderCryptoItem = (item: CriptoEnum) => (
    <CryptoBtn
      criptoActive={criptoActive}
      cryptoName={item}
      handleActiveCripto={handleActiveCripto}
    />
  );

  return (
    <Wrapper>
      <Notification isOpenNotify={isOpenNotify} notifyMessage={notifyMessage} />
      {width < 767 && (
        <MobControls>
          <List renderItem={renderCryptoItem} data={cryptoArr} styles={criptoListCss} />
          <InputWrap>
            <Label>
              <span>{t('bet')}</span>
              <Input placeholder={t('amount')} type="number" min={1} />
            </Label>
          </InputWrap>
          <MobButtonsWrap>
            {rouletteList.map(({ gem }) => (
              <ControlBlock key={gem} className={gemData[gem]}>
                <Button>
                  <span>$ 0.00</span>
                  <span>{t('bet')}</span>
                </Button>
              </ControlBlock>
            ))}
          </MobButtonsWrap>
        </MobControls>
      )}
      <List data={rouletteList} renderItem={renderItem} styles={listRouletteData} />
    </Wrapper>
  );
};
