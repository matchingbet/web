import { Box, Checkbox, FormControlLabel, Link, styled, TextField, Typography } from "@mui/material";

import { CommonButton } from "../../components/CommonButton/CommonButton";
import { Logo } from "../../components/Logo/Logo";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: "220px",
    maxHeight: "700px",
    margin: "60px auto",
  },
}));

const StyledForm = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    margin: "80px 0 10px 0",
    "&:nth-of-type(1) > button:nth-of-type(1)": {
      marginTop: "30px"
    }
  },
}));

export default function Login() {
  return (
    <StyledBox>
      <Logo size={170} />
      <StyledForm component="form">
        <TextField label="Email" variant="standard" required />
        <TextField label="Senha" variant="standard" required />
        <FormControlLabel control={<Checkbox />} label={"Salvar Informações"} />
        <CommonButton type="submit" text="ENTRAR" />
      </StyledForm>

      <Link color="inherit" target="_blank" href="#">
        <Typography align="center">Esqueceu a senha?</Typography>
      </Link>
    </StyledBox>
  );
}