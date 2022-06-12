import { Button, ButtonProps, styled } from "@mui/material";


export default function CustomButton({ children, ...props }: ButtonProps) {


  const StyledButton = styled(Button)({
    color: "white",
    fontSize: "0.8rem",
    textTransform: "capitalize"
  });

  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}
