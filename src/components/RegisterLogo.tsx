import {Logo} from "./Logo/Logo";
import {Typography} from "@mui/material";
import Container from "@mui/material/Container";
import {styled} from "@mui/system";

const StyledHeaderContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "30vh",
    color: "white"
})

const RegisterLogo = () => {
    return (
        <StyledHeaderContainer>
            <Logo size={125} onClick={() => console.log("cliquei no logo")}/>

            <Typography variant="body2">
                Cadastre-se para criar e participar de várias apostas
            </Typography>
        </StyledHeaderContainer>
    );
};

export default RegisterLogo;