export interface CustomTheme {
  colors: {
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    borderPrimary: string;
    buttonPrimary: string;
    inputPrimary: string;

    textPrimary: string;
  };

  cursor: string;

  order: {
    mainIndex: number;
    firstIndex: number;
    mediumIndex: number;
    lastIndex: number;
  };

  borders: {
    radiusPrimary: number;
    radiusSecondary: number;
  };

  media: {
    XXLarge: string;
    XLarge: string;
  };

  transition: string;
}
