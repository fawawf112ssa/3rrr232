import { createTheme } from '@mui/material';

import { colors } from './colors';

export const theme = createTheme({
  colors: {
    bgPrimary: colors.blue100,
    bgSecondary: colors.blue200,
    bgTertiary: colors.blue500,
    borderPrimary: colors.whiteTransparent100,
    buttonPrimary: colors.blueLight100,
    inputPrimary: colors.blue400,

    textPrimary: colors.white,
  },

  cursor: 'pointer',

  order: {
    mainIndex: 150,
    firstIndex: 100,
    mediumIndex: 50,
    lastIndex: 10,
  },

  borders: {
    radiusPrimary: 1.15,
    radiusSecondary: 0.6,
  },

  media: {
    XXLarge: '(min-width: 2500px)',
    XLarge: '(min-width: 2100px)',
  },

  transition: 'all 0.3s',
});
