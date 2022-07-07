import SocialLogin from "react-social-login";

import { StyledButton } from '../styles/buttons'

const SocialButton = ({children, triggerLogin, ...props}: any) => {

    return (
        <StyledButton onClick={triggerLogin} {...props}>
            {children}
        </StyledButton>
    );
}

export default SocialLogin(SocialButton);