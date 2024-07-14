import { Main } from './Long.styled';
import { Transfer } from './Transfer/Transfer';
import { History } from './History/History';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { setGameId } from 'store/reducers/gameSlice';

export const LongPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setGameId(1));
  }, []);

  return (
    <Main>
      <Transfer />
      <History />
    </Main>
  );
};

export default LongPage;
