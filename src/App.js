// Screens
import HomeScreen from '@/screens/Home/Home.tsx';
import ProductScreen from '@/screens/Product/Product.tsx';
import WhyAmberScreen from '@/screens/WhyAmber/WhyAmber.tsx';
import ContactUsScreen from '@/screens/ContactUs/ContactUs.tsx';
// Material UI
import { StyledEngineProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// External Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main:  '#F17127'
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product" element={<ProductScreen/>} />
            <Route path="/why-amber" element={<WhyAmberScreen />} />
            <Route path="/contact-us" element={<ContactUsScreen />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
