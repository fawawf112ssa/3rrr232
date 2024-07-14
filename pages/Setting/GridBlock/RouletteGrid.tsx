import { useUserHistoryRouletteQuery } from 'services';
import { useEffect, useState } from 'react';
import { List } from 'modules/components/List/List';
import { Card, CardAmount, CardDate, CardId, CardWallet, cardListCss } from '../Setting.styled';
import { useTranslation } from 'react-i18next';
import { converterDate } from 'utils/converter';
import { UserRouletteHistory } from 'services/api/roulette';

export const RouletteGrid = () => {
  const { t } = useTranslation();
  const [historyData, setHistoryData] = useState<UserRouletteHistory[]>([]);
  const { data, isSuccess } = useUserHistoryRouletteQuery(null);

  useEffect(() => {
    if (isSuccess && data) {
      setHistoryData(data.result);
    }
  }, [isSuccess]);

  const renderCardItem = ({ round_id, date, coin, profit, bet, status }: UserRouletteHistory) => (
    <Card>
      <CardId>#{round_id}</CardId>
      <CardDate>{converterDate(date)}</CardDate>
      <CardWallet>
        <p>{t('walletCurrency')}</p>
        <h2>
          <span>trust wallet</span>
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
