import { Controls } from './Controls/Controls';
import { Game } from './Game/Game';
import { Main } from './Roulette.styled';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { setGameId } from 'store/reducers/gameSlice';

export const RoulettePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setGameId(2));
  }, []);

  return (
    <Main>
      <Game />
      <Controls />
    </Main>
  );
};

export default RoulettePage;
