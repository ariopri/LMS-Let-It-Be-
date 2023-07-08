import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});

interface Colors {
 [key: string]: {
    [key: string]: string;
 };
}

const colors: Colors = {
  accentLight: {
    900: '#1A365D',
    800: '#2A4365',
    700: '#2C5282',
    600: '#2B6CB0',
    500: '#3182CE',
    400: '#4299E1',
    300: '#63B3ED',
    200: '#90CDF4',
    100: '#BEE3F8',
    50: '#EBF8FF',
  },
  accentDark: {
    900: '#5F370E',
    800: '#744210',
    700: '#975A16',
    600: '#B7791F',
    500: '#D69E2E',
    400: '#ECC94B',
    300: '#F6E05E',
    200: '#FAF089',
    100: '#FEFCBF',
    50: '#FFFFF0',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
