import {
  Wrapper,
  HistoryBlock,
  HistoryList,
  Title,
  TableWrap,
  HistoryItem,
} from './History.styled';
import { historyData } from 'data/long';
import { HistoryTable } from 'modules/components/HistoryTable/HistoryTable';
import { useAppSelector } from 'store';
import { gameSelector } from 'store/selectors';

export const History = () => {
  const {
    gameInfo: { long },
  } = useAppSelector(gameSelector);

  return (
    <Wrapper>
      <HistoryBlock>
        <Title>History</Title>
        {long && (
          <HistoryList>
            {long.round_history.map((item, i) => (
              <HistoryItem num={Number(item)} key={i}>
                {item}x
              </HistoryItem>
            ))}
          </HistoryList>
        )}
      </HistoryBlock>
      <TableWrap>
        <HistoryTable historyData={historyData} />
      </TableWrap>
    </Wrapper>
  );
};
