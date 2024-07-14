import { Main } from './Futures.styled';
import { Game } from './Game/Game';
import { History } from './History/History';
import { Transfer } from './Transfer/Transfer';

export const FuturesPage = () => (
  <Main>
    <Game />
    <Transfer />
    <History />
  </Main>
);

export default FuturesPage;
