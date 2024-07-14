import { useTranslation } from 'react-i18next';

import { RateSelection } from 'modules/components/RateSelection/RateSelection';
import { Controls, DownBtn, UpBtn } from './Transfer.styled';
import { down, up } from 'constants/images';

export const Transfer = () => {
  const { t } = useTranslation();

  return (
    <RateSelection>
      <Controls>
        <UpBtn>
          <img src={up} />
          <p>{t('up')}</p>
        </UpBtn>
        <DownBtn>
          <img src={down} />
          <p>{t('down')}</p>
        </DownBtn>
      </Controls>
    </RateSelection>
  );
};
