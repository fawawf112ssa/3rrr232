import { useHistoryRoomQuery } from 'services';
import { Table } from '../Table/Table';
import { useEffect, useState } from 'react';
import { bxeHistoryTHead } from 'constants/table';
import { converterDate } from 'utils/converter';
import { BXEHistory } from 'services/api/room';

export const BXETable = () => {
  const [historyData, setHistoryData] = useState<BXEHistory[]>([]);
  const { data, isSuccess } = useHistoryRoomQuery(null);

  useEffect(() => {
    if (isSuccess && data) {
      setHistoryData(data.result);
    }
  }, [isSuccess]);

  const renderItem = ({ id, coin, value, date, status, result }: BXEHistory, i: number) => (
    <tr key={i} className={status === 'new' ? '' : result === 'win' ? 'win' : 'lost'}>
      <td>{id}</td>
      <td>{coin}</td>
      <td>
        <span>
          {value} {coin}
        </span>
        <span>? USD</span>
      </td>
      <td>{status}</td>
      <td>{result}</td>
      <td>{converterDate(date)}</td>
    </tr>
  );

  return <Table data={historyData} renderItem={renderItem} headData={bxeHistoryTHead} />;
};
