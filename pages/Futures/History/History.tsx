import { historyData } from 'data/long';
import { HistoryTable } from 'modules/components/HistoryTable/HistoryTable';
import { Wrapper } from './History.styled';

export const History = () => {
  return (
    <Wrapper>
      <HistoryTable historyData={historyData} />
    </Wrapper>
  );
};
