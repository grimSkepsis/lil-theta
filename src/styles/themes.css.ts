import { createTheme } from '@vanilla-extract/css';
import { themeContract } from './themeContract.css';

export const lightTheme = createTheme(themeContract, {
  colors: {
    primary: 'hsl(210, 100%, 50%)',
    secondary: 'hsl(210, 60%, 50%)',
    tertiary: 'hsl(210, 30%, 50%)',
    primaryContent: 'hsl(0, 0%, 90%)',
    secondaryContent: 'hsl(0, 0%, 70%)',
    tertiaryContent: 'hsl(0, 0%, 50%)',
    white: '#ffffff',
    black: '#000000',
  },
});

export const darkTheme = createTheme(themeContract, {
  colors: {
    primary: 'hsl(210, 100%, 50%)',
    secondary: 'hsl(210, 60%, 50%)',
    tertiary: 'hsl(210, 30%, 50%)',
    primaryContent: 'hsl(0, 0%, 10%)',
    secondaryContent: 'hsl(0, 0%, 30%)',
    tertiaryContent: 'hsl(0, 0%, 50%)',
    white: '#ffffff',
    black: '#000000',
  },
});