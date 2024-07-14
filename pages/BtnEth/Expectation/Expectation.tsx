import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './Expectation.styled';

export const Expectation = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <p>{t('expectation')}</p>
      <CircularProgress color="inherit" size={20} />
    </Wrapper>
  );
};
