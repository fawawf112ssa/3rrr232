import { useTranslation } from 'react-i18next';

interface THeadProps {
  data: string[];
}

export const THead = ({ data }: THeadProps) => {
  const { t } = useTranslation();

  return (
    <thead>
      <tr>
        {data.map((item) => (
          <th key={item}>{t(item)}</th>
        ))}
      </tr>
    </thead>
  );
};
