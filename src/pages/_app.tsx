import {Box, createTheme, ThemeProvider} from '@mui/material'
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {GoogleOAuthProvider} from '@react-oauth/google';


const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GoogleOAuthProvider clientId="216054679828-qj27dd0bgcveelk16k4eukqfek11fi4v.apps.googleusercontent.com">
                <Box>
                    <Component {...pageProps} />
                </Box>
            </GoogleOAuthProvider>
        </ThemeProvider>
    );
}

export default MyApp;
