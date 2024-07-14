import { useTranslation } from 'react-i18next';

import { Icon, TransferBlock, TransferCount, TransferInfo, TransferWrap } from './Transfer.styled';
import { RateSelection } from 'modules/components/RateSelection/RateSelection';
import { useAppSelector } from 'store';
import { gameSelector } from 'store/selectors';

export const Transfer = () => {
  const { t } = useTranslation();
  const {
    gameInfo: { long },
  } = useAppSelector(gameSelector);

  return (
    <RateSelection>
      <TransferBlock>
        <TransferWrap>
          <TransferCount>
            {long !== null && long.my_bet !== null ? long.my_bet.value : '0.00'}
          </TransferCount>
          <TransferInfo>{t('inRound')}</TransferInfo>
        </TransferWrap>
        <Icon />
        <TransferWrap>
          <TransferCount>
            {long !== null && long.my_bet !== null && long.round_info !== null
              ? (long.my_bet.value * Number(long.round_info.coef)).toFixed(2)
              : '0.00'}
          </TransferCount>
          <TransferInfo>{t('win')}</TransferInfo>
        </TransferWrap>
      </TransferBlock>
    </RateSelection>
  );
};
