'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
palette: {
    primary: {
        light: '#757ce8',
        main: '#5A0084',
        dark: '#002884',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff7961',
        main: '#5A0084',
        dark: '#ba000d',
        contrastText: '#000',
    },
    },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
