import { ThemeProvider } from 'styled-components';
import { personalTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={personalTheme}>Este es mi challenge</ThemeProvider>
  );
}

export default App;
