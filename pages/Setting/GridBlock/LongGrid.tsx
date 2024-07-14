import { useUserHistoryLongQuery } from 'services';
import { UserLongHistory } from 'services/api/crash';
import { useEffect, useState } from 'react';
import { List } from 'modules/components/List/List';
import { Card, CardAmount, CardDate, CardId, CardWallet, cardListCss } from '../Setting.styled';
import { useTranslation } from 'react-i18next';
import { converterDate } from 'utils/converter';

export const LongGrid = () => {
  const { t } = useTranslation();
  const [historyData, setHistoryData] = useState<UserLongHistory[]>([]);
  const { data, isSuccess } = useUserHistoryLongQuery(null);

  useEffect(() => {
    if (isSuccess && data) {
      setHistoryData(data.result);
    }
  }, [isSuccess]);

  const renderCardItem = ({ round_id, date, coin, profit, bet, status }: UserLongHistory) => (
    <Card>
      <CardId>#{round_id}</CardId>
      <CardDate>{converterDate(date)}</CardDate>
      <CardWallet>
        <p>{t('walletCurrency')}</p>
        <h2>
          <span>{coin}</span>
        </h2>
      </CardWallet>
      <CardAmount className={status === 'win' ? 'win' : 'lost'}>
        <p>{t('amount')}</p>
        <h2>
          {profit !== null ? profit : bet} {coin}
        </h2>
      </CardAmount>
    </Card>
  );

  return <List renderItem={renderCardItem} data={historyData} styles={cardListCss} />;
};
