import { Main } from './BtnEth.styled';
import { CreateGameBlock } from './CreateGameBlock/CreateGameBlock';
import { ListCreatedGames } from './ListCreatedGames/ListCreatedGames';
import { Notification } from 'modules/components/Notification/Notification';
import { useAppDispatch, useAppSelector } from 'store';
import { notifySelector } from 'store/selectors';
import { useEffect } from 'react';
import { setGameId } from 'store/reducers/gameSlice';

export const BtnEthPage = () => {
  const dispatch = useAppDispatch();
  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);

  useEffect(() => {
    dispatch(setGameId(3));
  }, []);

  return (
    <Main>
      <Notification isOpenNotify={isOpenNotify} notifyMessage={notifyMessage} />
      <CreateGameBlock />
      <ListCreatedGames />
    </Main>
  );
};

export default BtnEthPage;
