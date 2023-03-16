// import { ThemeProvider,createTheme } from '@mui/material';
import './App.css';
import LandingPage from './Page/LandingPage';

function App() {

  // const theme = createTheme({
  //   palette: {
  //     secondary: {
  //       main: '#ffffff'
  //     },
  //     neutral: {
  //       main: '#000000',
  //       light: '#475467',
  //       lighter: '#98A2B3'
  //     },
  //   },
  // });


  return (
    // <ThemeProvider theme={theme}>
      <LandingPage />
    // </ThemeProvider>
  );
}

export default App;
