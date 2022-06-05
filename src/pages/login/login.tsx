import React, { useState } from "react";
import { Box, Checkbox, FormControlLabel, IconButton, InputAdornment, Link, styled, TextField, Typography } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [saveInformation, setSaveInformation] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(saveInformation);
  }

  const handleClickShowPassword = (showPassword: boolean) => {
    setShowPassword(showPassword);
  };

  return (
    <StyledBox>
      <Logo size={170} />
      <StyledForm component="form" onSubmit={handleSubmit}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
          variant="standard"
          required
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          label="Senha"
          variant="standard"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              value={saveInformation}
              onChange={(e) => setSaveInformation(e.target.checked)}
            />
          }
          label={"Salvar Informações"}
        />
        <CommonButton type="submit" text="ENTRAR" />
      </StyledForm>

      <Link color="inherit" target="_blank" href="#">
        <Typography align="center">Esqueceu a senha?</Typography>
      </Link>
    </StyledBox>
  );
}