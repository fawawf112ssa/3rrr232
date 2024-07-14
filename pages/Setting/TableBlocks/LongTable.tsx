import { useUserHistoryLongQuery } from 'services';
import { UserLongHistory } from 'services/api/crash';
import { Table } from '../Table/Table';
import { useEffect, useState } from 'react';
import { longHistoryTHead } from 'constants/table';
import { converterDate } from 'utils/converter';

export const LongTable = () => {
  const [historyData, setHistoryData] = useState<UserLongHistory[]>([]);
  const { data, isSuccess } = useUserHistoryLongQuery(null);

  useEffect(() => {
    if (isSuccess && data) {
      setHistoryData(data.result);
    }
  }, [isSuccess]);

  const renderItem = (
    { round_id, coin, bet, date, status, profit }: UserLongHistory,
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

  return <Table data={historyData} renderItem={renderItem} headData={longHistoryTHead} />;
};
