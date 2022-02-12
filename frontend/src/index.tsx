import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core';
import theme from './theme';

const Index = () => {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const appTheme: MantineThemeOverride = {
    ...theme,
    colorScheme,
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={appTheme}>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
