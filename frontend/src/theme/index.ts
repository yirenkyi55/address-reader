import { MantineThemeOverride } from '@mantine/core';
export const theme: MantineThemeOverride = {
  primaryColor: 'blue',
  fontFamily: 'Lato, Verdana, sans-serif',
  colorScheme: 'light',
  colors: {
    white: ['#fff'],
    blue: [
      '#004761',
      '#15738e',
      '#53a2be',
      '#1c99bf',
      '#1b9dc4',
      '#1ca5ce',
      '#1dabd6',
      '#1db3e0',
      '#1ebbea',
      '#6deeff',
    ],
    'dark-blue': [
      '#10182f',
      '#1b2951',
      '#213263',
      '#263a73',
      '#2c4487',
      '#314c99',
      '#3656ad',
      '#3a5cbc',
      '#3d64cc',
      '#406bdb',
    ],
  },
  other: {
    borderRadius: {
      sm: '.7rem',
      md: '1rem',
    },
    handleeFont: 'Handlee',
  },
};

export default theme;
