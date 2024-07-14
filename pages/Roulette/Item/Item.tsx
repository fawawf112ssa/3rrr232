import { Gem, gemData } from 'store/reducers/gameSlice';
import { Slide } from '../Game/Game.styled';
import { Row, Wrapper } from './Item.styled';

interface RouletteItemProps {
  isLoser: boolean;
  gem: Gem;
}

export const RouletteItem = ({ gem, isLoser }: RouletteItemProps) => {
  return (
    <Wrapper style={{ opacity: isLoser ? '0.3' : '1' }}>
      <Row>
        <Slide className={gemData[gem]} />
      </Row>
    </Wrapper>
  );
};
