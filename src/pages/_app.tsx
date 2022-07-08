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
            <GoogleOAuthProvider clientId="962460859882-55m5ipupp5i9ifc333rudse3at37jupf.apps.googleusercontent.com">
                <Box>
                    <Component {...pageProps} />
                </Box>
            </GoogleOAuthProvider>
        </ThemeProvider>
    );
}

export default MyApp;
