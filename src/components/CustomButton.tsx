import { Button, ButtonProps } from "@mui/material";


export default function CustomButton({ children, ...props }: ButtonProps) {

  return (
    <Button {...props} sx={{
      color: "white",
      fontSize: "0.8rem",
      textTransform: "capitalize"
    }}>
      {children}
    </Button>
  );
}
