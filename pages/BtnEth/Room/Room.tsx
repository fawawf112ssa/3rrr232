import { Room as RoomProps } from 'store/reducers/gameSlice';
import {
  GameControl,
  GameControlBlock,
  GameIcon,
  GameInfo,
  GameWrap,
  Time,
  UserLogo,
} from './Room.styled';
import { cryptoIcon } from 'constants/images';
import { useJoinRoomMutation, useRemoveRoomMutation } from 'services';
import { useTranslation } from 'react-i18next';
import { useModal } from 'hooks/useModal';
import { BasicModal } from 'modules/components/Modal/Modal';
import { CoinSelection } from 'modules/components/Modal/CoinSelection/CoinSelection';
import { MouseEvent, useEffect, useState } from 'react';
import { CriptoEnum } from 'store/reducers/currencySlice';
import { cryptoArr } from 'constants/crypto';
import { Position } from 'services/api/room';
import { useAppDispatch, useAppSelector } from 'store';
import { userSelector } from 'store/selectors';
import { converterForTimer } from 'utils/converter';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/notify';
import { Expectation } from '../Expectation/Expectation';

enum Action {
  CLOSE,
  JOIN,
  EXIT,
  NOTHING,
}

interface UserRoom {
  id: number;
  name: string;
  logo: string | null;
  action: Action;
}

interface CardInfo {
  userLeft: UserRoom | null;
  userRight: UserRoom | null;
}

export const RoomItem = (item: RoomProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [criptoActive, setCriptoActive] = useState<CriptoEnum>(cryptoArr[0]);
  const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);
  const { user, currentUser } = useAppSelector(userSelector);
  const [isRegCurrUser, setIsRegCurrUser] = useState(false);
  const [isRunCurrUser, setIsRunCurrUser] = useState(false);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [fetchJoinInRoom, { data: dataJoinInRoom, isSuccess: isSuccessJoinInRoom }] =
    useJoinRoomMutation();
  const [fetchCloseRoom, { data: dataCloseRoom, isSuccess: isSuccessCloseRoom }] =
    useRemoveRoomMutation();

  useEffect(() => {
    if (item.user1_side === Position.BTC && item.user2_name === null) {
      const userLeft = {
        id: item.user1_id,
        name: item.user1_name,
        logo: item.user1_logo,
        action: Action.CLOSE,
      };
      const userRight = null;
      setCardInfo({ userLeft, userRight });
    } else if (
      item.user1_side === Position.BTC &&
      item.user2_name !== null &&
      item.user2_id !== null
    ) {
      const userLeft = {
        id: item.user1_id,
        name: item.user1_name,
        logo: item.user1_logo,
        action: Action.NOTHING,
      };
      const userRight = {
        id: item.user2_id,
        name: item.user2_name,
        logo: item.user2_logo,
        action: Action.NOTHING,
      };
      setCardInfo({ userLeft, userRight });
    } else if (item.user1_side === Position.ETH && item.user2_name === null) {
      const userLeft = null;
      const userRight = {
        id: item.user1_id,
        name: item.user1_name,
        logo: item.user1_logo,
        action: Action.CLOSE,
      };
      setCardInfo({ userLeft, userRight });
    } else if (item.user2_name !== null && item.user2_id !== null) {
      const userLeft = {
        id: item.user2_id,
        name: item.user2_name,
        logo: item.user2_logo,
        action: Action.NOTHING,
      };
      const userRight = {
        id: item.user1_id,
        name: item.user1_name,
        logo: item.user1_logo,
        action: Action.NOTHING,
      };
      setCardInfo({ userLeft, userRight });
    }

    switch (currentUser) {
      case null:
        break;
      case item.user1_id:
      case item.user2_id:
        if (item.user2_id !== null) {
          setIsRunCurrUser(true);
        } else {
          setIsRegCurrUser(true);
        }
        break;

      default:
        break;
    }
  }, [item.user2_name]);

  useEffect(() => {
    if (!(isSuccessJoinInRoom && dataJoinInRoom)) {
      return;
    }

    switch (dataJoinInRoom.result) {
      case 'ok':
        dispatch(openNotify(alertMessage.joinInRoomSuccess));
        break;

      case 'fail':
        dispatch(openNotify({ message: dataJoinInRoom.details, type: 'error' }));
        break;

      default:
        break;
    }
  }, [isSuccessJoinInRoom]);

  useEffect(() => {
    if (!(isSuccessCloseRoom && dataCloseRoom)) {
      return;
    }

    switch (dataCloseRoom.result) {
      case 'ok':
        dispatch(openNotify(alertMessage.closeRoomSuccess));
        break;

      case 'fail':
        dispatch(openNotify({ message: dataCloseRoom.details, type: 'error' }));
        break;

      default:
        break;
    }
  }, [isSuccessCloseRoom]);

  useEffect(() => {
    if (
      item.winner_id === null ||
      (item.user1_id !== item.winner_id && item.user2_id !== item.winner_id) ||
      currentUser === null
    ) {
      return;
    }

    if (item.winner_id === currentUser) {
      dispatch(
        openNotify({
          message: `Win: $${item.value_usd * 2} total prize pool in room #${item.id}. `,
          type: 'info',
        })
      );
    }
  }, [item.winner_id]);

  const handleActiveCripto = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id as CriptoEnum;

    setCriptoActive(id);
  };

  const handleJoinInRoom = () => {
    console.log(item.id);

    fetchJoinInRoom({ room_id: item.id, coin: criptoActive }).then(closeModal);
  };

  const handleCloseRoom = () => {
    fetchCloseRoom({ room_id: item.id });
  };

  if (cardInfo === null) {
    return <></>;
  }

  return (
    <GameWrap
      key={item.id}
      className={isRunCurrUser ? 'active-game' : isRegCurrUser ? 'my-room' : ''}
    >
      <GameControlBlock className={cardInfo.userLeft === null ? 'userNull' : ''}>
        {cardInfo.userLeft !== null && (
          <GameIcon>
            <UserLogo url={cardInfo.userLeft.logo} />
            <img src={cryptoIcon.btc} alt="" />
          </GameIcon>
        )}

        <GameControl>
          {cardInfo.userLeft !== null && <p>{cardInfo.userLeft.name}</p>}
          {cardInfo.userLeft === null && cardInfo.userRight?.id === currentUser ? (
            <Expectation />
          ) : cardInfo.userLeft === null ? (
            <>
              <button className={'join'} onClick={openModal}>
                {t('join')}
              </button>
            </>
          ) : cardInfo.userLeft.action === Action.CLOSE &&
            user &&
            user.nick === cardInfo.userLeft.name ? (
            <button className={'close'} onClick={handleCloseRoom}>
              {t('close')}
            </button>
          ) : (
            <></>
          )}
        </GameControl>
      </GameControlBlock>
      <GameInfo>
        <p className="game-info">
          {t('game')} #{item.id}
        </p>
        {item.status_due_sec === null && item.status === 'new' ? (
          <p>10 : 00</p>
        ) : item.status === 'complete' ? (
          <p>00 : 00</p>
        ) : (
          <Time>
            {converterForTimer(String(item.status_due_sec), true).map((item, i) => (
              <p key={i}>{i === 0 && Number(item) < 10 ? `0${item}` : item}</p>
            ))}
          </Time>
        )}
        <p>
          <span>{t('amount')}:</span>
          <span>$ {item.value_usd}</span>
        </p>
      </GameInfo>
      <GameControlBlock className={cardInfo.userRight === null ? 'userNull' : 'right-side'}>
        <GameControl className="right-side-control">
          {cardInfo.userRight !== null && <p>{cardInfo.userRight.name}</p>}
          {cardInfo.userRight === null && cardInfo.userLeft?.id === currentUser ? (
            <Expectation />
          ) : cardInfo.userRight === null ? (
            <button className={'join'} onClick={openModal}>
              {t('join')}
            </button>
          ) : cardInfo.userRight.action === Action.CLOSE &&
            user &&
            user.nick === cardInfo.userRight.name ? (
            <button className={'close'} onClick={handleCloseRoom}>
              {t('close')}
            </button>
          ) : (
            <></>
          )}
        </GameControl>
        {cardInfo.userRight !== null && (
          <GameIcon className="right-side-icon">
            <UserLogo url={cardInfo.userRight.logo} />
            <img src={cryptoIcon.eth} alt="" />
          </GameIcon>
        )}
      </GameControlBlock>
      <BasicModal open={isOpenModal} handleClose={closeModal}>
        <>
          <CoinSelection
            handleClose={closeModal}
            criptoActive={criptoActive}
            handleActiveCripto={handleActiveCripto}
            handleSubmit={handleJoinInRoom}
          />
        </>
      </BasicModal>
    </GameWrap>
  );
};
