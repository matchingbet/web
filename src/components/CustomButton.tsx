import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface CustomButtonProps extends ButtonProps {
  loading: boolean;
}

const theme = createTheme({
  palette: {
    action: {
      selected: "#3308FF"
    }
  }
});

export default function CustomButton({ children, loading, ...props }: CustomButtonProps) {

  return (
    <ThemeProvider theme={theme}>
      <Button {...props} sx={{
        color: "white",
        fontWeight: "bold", 
        p: 1.3,
        fontSize: "1rem",
        textTransform: "capitalize",
        background: "#3308FF",
        borderRadius: "50px",
        height: "5vh",
        ...props.sx,
      }}>
        {loading ? <CircularProgress color={"inherit"} size={25} /> : children}
      </Button>
    </ThemeProvider>
  );
}
