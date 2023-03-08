import React from 'react';
import { ThemeProvider } from 'styled-components';
import { personalTheme } from '@styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from '@styles/globalStyles';

import Home from '@pages/home';
import Footer from '@components/footer';

function App() {
  return (
    <ThemeProvider theme={personalTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
