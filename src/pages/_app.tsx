import { createTheme, ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
