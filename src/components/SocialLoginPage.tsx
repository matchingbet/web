import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import {Button, Typography} from "@mui/material";
import RegisterLogo from "./RegisterLogo";
import SocialButton from "./SocialButton";

const StyledPageContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "75vh"
});

const StyledButtons = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "30vh",
    width: "100%",
    color: "white",
});

const StyledTerms = styled(Typography)({
    marginTop: "2vh",
    color: "white"
})


const StyledLink = styled("a")({
    fontWeight: "bold",
    cursor: "pointer"
})

interface SocialLoginProps {
    setShowSignUpForm: (shouldShowSignUpForm: boolean) => void
}

const SocialLoginPage = ({setShowSignUpForm}: SocialLoginProps) => {

    const onLoginSuccess = (e: any) => {
        console.log(e);
    }

    const onLoginFailure = (e: any) => {
        console.log(e);
    }

    const checkIfNextIsRunningOnBrowserToRenderComponent = typeof window === 'object';

    return (
        <StyledPageContainer>

            <RegisterLogo/>

            <StyledButtons>
                {
                    checkIfNextIsRunningOnBrowserToRenderComponent ?
                        <>
                            <SocialButton
                                variant="outlined"
                                startIcon={<GoogleIcon/>}
                                appId={"962460859882-55m5ipupp5i9ifc333rudse3at37jupf.apps.googleusercontent.com"}
                                provider={"google"}
                                onLoginSuccess={onLoginSuccess}
                                onLoginFailure={onLoginFailure}
                                scope={'https://www.googleapis.com/auth/user.gender.read'}>
                                ENTRE COM O GOOGLE
                            </SocialButton>
                            <SocialButton
                                variant="outlined"
                                startIcon={<FacebookIcon/>}
                                appId={""}
                                provider={"facebook"}
                                onLoginSuccess={onLoginSuccess}
                                onLoginFailure={onLoginFailure}>
                                ENTRE COM O FACEBOOK
                            </SocialButton>
                        </>
                        : null
                }

                <Typography variant="body1">
                    Ou
                </Typography>

                <Button
                    variant="outlined"
                    sx={{width: "100%"}}
                    startIcon={<MailIcon/>}
                    onClick={() => setShowSignUpForm(true)}>
                    CONTINUE COM O E-MAIL
                </Button>

                <Typography variant="body1">
                    Já possui uma conta? <StyledLink onClick={() => setShowSignUpForm(true)}>Faça Login</StyledLink>
                </Typography>

            </StyledButtons>

            <StyledTerms variant="body2">
                Ao cadastrar-se, você aceita os nosssos Termos de Uso e Política de Privacidade
            </StyledTerms>

        </StyledPageContainer>
    );
}

export default SocialLoginPage;