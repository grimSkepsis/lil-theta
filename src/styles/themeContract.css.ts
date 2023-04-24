import { createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  colors: {
    primary: null,
    secondary: null,
    tertiary: null,
    primaryContent: null,
    secondaryContent: null,
    tertiaryContent: null,
    white: null,
    black: null,
  },
});