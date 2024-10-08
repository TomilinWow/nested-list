import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { List } from "./components/List";



export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <List />
    </ThemeProvider>
  );
};
