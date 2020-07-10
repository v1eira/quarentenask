import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';
import history from './services/history';

function App() {
  const [theme, setTheme] = usePersistedState('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes toggleTheme={toggleTheme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
