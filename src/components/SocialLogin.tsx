import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import {Button, Typography} from "@mui/material";
import RegisterLogo from "./RegisterLogo";

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

const StyledButton = styled(Button)({
    width: "100%"
})

const StyledLink = styled("a")({
    fontWeight: "bold",
    cursor: "pointer"
})

interface SocialLoginProps {
    setShowSignUpForm: (shouldShowSignUpForm: boolean) => void
}

const SocialLogin = ({setShowSignUpForm}: SocialLoginProps) => {
    return (
        <StyledPageContainer>

            <RegisterLogo/>

            <StyledButtons>
                <StyledButton variant="outlined" startIcon={<GoogleIcon/>}>
                    ENTRE COM O GOOGLE
                </StyledButton>

                <StyledButton variant="outlined" startIcon={<FacebookIcon/>}>
                    ENTRE COM O FACEBOOK
                </StyledButton>

                <Typography variant="body1">
                    Ou
                </Typography>

                <StyledButton variant="outlined" startIcon={<MailIcon/>}>
                    CONTINUE COM O E-MAIL
                </StyledButton>

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

export default SocialLogin