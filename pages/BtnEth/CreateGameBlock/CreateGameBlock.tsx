import { useTranslation } from 'react-i18next';
import { useState, MouseEvent, useEffect } from 'react';

import { coinBtc, coinEth } from 'constants/images';
import {
  Wrapper,
  ChooseCoin,
  CoinInfo,
  Button,
  ImgWrap,
  Input,
  Lable,
  criptoListCss,
} from './CreateGameBlock.styled';
import { cryptoArr } from 'constants/crypto';
import { List } from 'modules/components/List/List';
import { CryptoBtn } from 'modules/components/CryptoBtn/CryptoBtn';
import { CriptoEnum } from 'store/reducers/currencySlice';
import { Position } from 'services/api/room';
import { useCreateRoomMutation } from 'services';
import { useAppDispatch } from 'store';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/notify';

export const CreateGameBlock = () => {
  const dispatch = useAppDispatch();
  const [criptoActive, setCriptoActive] = useState<CriptoEnum>(cryptoArr[0]);
  const [position, setPosition] = useState<Position | null>(null);
  const [bet, setBet] = useState('');
  const [isBlockedBtn, setIsBlockedBtn] = useState(false);
  const [isBetWarning, setIsBetWarning] = useState(false);
  const [isPositionWarning, setIsPositionWarning] = useState(false);
  const { t } = useTranslation();
  const [fetchCreateRoom, { data: dataCreateRoom, isSuccess: isSuccessCreateRoom }] =
    useCreateRoomMutation();

  useEffect(() => {
    if (!(isSuccessCreateRoom && dataCreateRoom)) {
      return;
    }

    switch (dataCreateRoom.result) {
      case 'ok':
        dispatch(openNotify(alertMessage.createRoomSuccess));
        setIsBlockedBtn(true);
        break;

      case 'fail':
        dispatch(openNotify({ message: dataCreateRoom.details, type: 'error' }));
        break;

      default:
        break;
    }

    const timer = setTimeout(() => setIsBlockedBtn(false), 10000);
    return () => clearTimeout(timer);
  }, [isSuccessCreateRoom]);

  const renderItem = (item: CriptoEnum) => (
    <CryptoBtn
      criptoActive={criptoActive}
      cryptoName={item}
      handleActiveCripto={handleActiveCripto}
    />
  );

  const handleActiveCripto = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id as CriptoEnum;

    setCriptoActive(id);
  };

  const handleCreateRoom = () => {
    if (!Number(bet)) {
      dispatch(openNotify({ message: 'Enter a value in the bet field', type: 'info' }));
      setIsBetWarning(true);
      const timer = setTimeout(() => setIsBetWarning(false), 1000);
      return () => clearTimeout(timer);
    }

    if (position === null) {
      dispatch(
        openNotify({ message: 'Select a position by clicking on one of the coins', type: 'info' })
      );
      setIsPositionWarning(true);
      const timer = setTimeout(() => setIsPositionWarning(false), 1000);
      return () => clearTimeout(timer);
    }

    fetchCreateRoom({ bet: Number(bet), coin: criptoActive, gem: position });
  };

  return (
    <Wrapper>
      <div>
        <Lable>
          <span>{t('bet')}</span>
          <Input
            placeholder={t('amount')}
            type="number"
            min={0.05}
            step={0.001}
            value={bet}
            onChange={(e) => setBet(e.target.value)}
            className={isBetWarning ? 'warning' : ''}
          />
        </Lable>
        <List renderItem={renderItem} data={cryptoArr} styles={criptoListCss} />
      </div>
      <CoinInfo className={isPositionWarning ? 'warning' : ''}>
        <ImgWrap
          onClick={() => setPosition(Position.BTC)}
          className={position === Position.BTC ? 'active' : ''}
        >
          <img src={coinBtc} alt="btc" />
        </ImgWrap>
        <ChooseCoin>
          <p>{t('chooseCoin')}</p>
          <p>
            {position === Position.BTC ? 'bitcoin' : position === Position.ETH ? 'etherium' : ''}
          </p>
        </ChooseCoin>
        <ImgWrap
          onClick={() => setPosition(Position.ETH)}
          className={position === Position.ETH ? 'active' : ''}
        >
          <img src={coinEth} alt="eth" />
        </ImgWrap>
      </CoinInfo>
      <Button disabled={isBlockedBtn} onClick={handleCreateRoom}>
        {t('createGame')}
      </Button>
    </Wrapper>
  );
};
