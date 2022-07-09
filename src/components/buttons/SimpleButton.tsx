import styled from "@emotion/styled";
import {Button} from "@mui/material";

const SimpleButton = ({children, style, ...props}: any) => {

    const StyledButton = styled(Button)({
        width: "100%",
        ...style
    })

    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
}


export default SimpleButton;
