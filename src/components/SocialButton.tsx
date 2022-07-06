import styled from "@emotion/styled";
import {Button} from "@mui/material";
import SocialLogin from "react-social-login";

const SocialButton = ({children, triggerLogin, ...props}: any) => {

    const StyledButton = styled(Button)({
        width: "100%"
    })

    return (
        <StyledButton onClick={triggerLogin} {...props}>
            {children}
        </StyledButton>
    );
}

export default SocialLogin(SocialButton);