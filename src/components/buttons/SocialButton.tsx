import SocialLogin from "react-social-login";

import SimpleButton from './SimpleButton'

interface SocialButtonProps {
    children: any,
    triggerLogin: any,
}

const SocialButton = ({children, triggerLogin, ...props}: SocialButtonProps) => {

    return (
        <SimpleButton onClick={triggerLogin} {...props}>
            {children}
        </SimpleButton>
    );
}

export default SocialLogin(SocialButton);