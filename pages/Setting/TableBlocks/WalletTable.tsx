import { useUserHistoryWalletQuery } from 'services';
import { Table } from '../Table/Table';
import { useEffect, useState } from 'react';
import { walletHistoryTHead } from 'constants/table';
import { UserWalletHistory } from 'services/api/wallet';

export const WalletTable = () => {
  const [historyData, setHistoryData] = useState<UserWalletHistory[]>([]);
  const { data, isSuccess } = useUserHistoryWalletQuery(null);

  useEffect(() => {
    if (isSuccess && data) {
      setHistoryData(data.history);
    }
  }, [isSuccess]);

  const renderItem = ({ coin }: UserWalletHistory, i: number) => (
    <tr key={i}>
      <td>{coin}</td>
    </tr>
  );

  return <Table data={historyData} renderItem={renderItem} headData={walletHistoryTHead} />;
};
