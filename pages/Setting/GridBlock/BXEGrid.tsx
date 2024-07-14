import { useHistoryRoomQuery } from 'services';
import { useEffect, useState } from 'react';
import { List } from 'modules/components/List/List';
import { Card, CardAmount, CardDate, CardId, CardWallet, cardListCss } from '../Setting.styled';
import { useTranslation } from 'react-i18next';
import { converterDate } from 'utils/converter';
import { BXEHistory } from 'services/api/room';

export const BXEGrid = () => {
  const { t } = useTranslation();
  const [historyData, setHistoryData] = useState<BXEHistory[]>([]);
  const { data, isSuccess } = useHistoryRoomQuery(null);

  useEffect(() => {
    if (isSuccess && data) {
      setHistoryData(data.result);
    }
  }, [isSuccess]);

  const renderCardItem = ({ id, date, coin, value, result, status }: BXEHistory) => (
    <Card>
      <CardId>
        #{id} {status === 'new' || status === 'cancel' ? ` - ${status}` : ''}
      </CardId>
      <CardDate>{converterDate(date)}</CardDate>
      <CardWallet>
        <p>{t('walletCurrency')}</p>
        <h2>
          <span>{coin}</span>
        </h2>
      </CardWallet>
      <CardAmount className={status === 'new' ? '' : result === 'win' ? 'win' : 'lost'}>
        <p>{t('amount')}</p>
        <h2>
          {value} {coin}
        </h2>
      </CardAmount>
    </Card>
  );

  return <List renderItem={renderCardItem} data={historyData} styles={cardListCss} />;
};
