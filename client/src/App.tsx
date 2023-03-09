import React from 'react';
import { ThemeProvider } from 'styled-components';
import { personalTheme } from '@styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from '@styles/globalStyles';
import { Provider } from 'react-redux';

import Home from '@pages/home';
import { store } from './store/store';

function App() {
  return (
    <ThemeProvider theme={personalTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
