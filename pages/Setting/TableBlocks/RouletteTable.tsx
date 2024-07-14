import { useUserHistoryRouletteQuery } from 'services';
import { Table } from '../Table/Table';
import { useEffect, useState } from 'react';
import { rouletteHistoryTHead } from 'constants/table';
import { UserRouletteHistory } from 'services/api/roulette';
import { converterDate } from 'utils/converter';

export const RouletteTable = () => {
  const [historyData, setHistoryData] = useState<UserRouletteHistory[]>([]);
  const { data, isSuccess } = useUserHistoryRouletteQuery(null);

  useEffect(() => {
    if (isSuccess && data) {
      setHistoryData(data.result);
    }
  }, [isSuccess]);

  const renderItem = (
    { round_id, coin, bet, date, status, profit }: UserRouletteHistory,
    i: number
  ) => (
    <tr key={i} className={status === 'win' ? 'win' : 'lost'}>
      <td>{round_id}</td>
      <td>{coin}</td>
      <td>
        <span>
          {bet} {coin}
        </span>
        <span>? USD</span>
      </td>
      <td>{profit}</td>
      <td>{converterDate(date)}</td>
    </tr>
  );

  return <Table data={historyData} renderItem={renderItem} headData={rouletteHistoryTHead} />;
};
