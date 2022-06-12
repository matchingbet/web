import React, { useEffect, useState, useRef } from "react";
import { Box, Checkbox, FormControlLabel, IconButton, InputAdornment, Link, styled, TextField, Typography, Grid, Button } from "@mui/material";
import { VisibilityOff, Visibility, Error } from "@mui/icons-material";

import { Logo } from "../../components/Logo/Logo";
import CustomButton from "../../components/CustomButton";
import { useRouter } from "next/router";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: "14rem",
    height: "100vh",
    margin: "0 auto",
    padding: "4rem 0 2rem 0",
  }
}));

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [saveInformation, setSaveInformation] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isConfirmBtnDisabled, setIsConfirmBtnDisabled] = useState<boolean>(true);

  const emailRef = useRef<HTMLInputElement>();

  useEffect(() => {
    setIsConfirmBtnDisabled(
      () => !getEmailPattern().test(email) || password.length < 8 || password.length > 16
    );
  }, [email, password])

  useEffect(() => {
    const ref = emailRef.current;
    ref?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      password,
      saveInformation
    }
    console.log(data);
    setErrorMessage("E-mail ou senha inválidos.");
  }

  const handleClickShowPassword = (showPassword: boolean) => {
    setShowPassword(showPassword);
  };

  const getEmailPattern = (): RegExp => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  const router = useRouter();

  return (
    <StyledBox>
      <Logo size={170} onClick={(e) => router.push("/")} />
      <Grid container component="form" onSubmit={handleSubmit} sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputRef={emailRef}
            type="email"
            label="Email"
            variant="standard"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 3 }}>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            label="Senha"
            variant="standard"
            required
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 1, mb: 5 }}>
          <FormControlLabel
            control={
              <Checkbox
                value={saveInformation}
                onChange={(e) => setSaveInformation(e.target.checked)}
              />
            }
            sx={{
              color: "#4A4A4A"
            }}
            label={"Salvar Informações"}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            gutterBottom
            color="error"
            variant="subtitle2"
            align="center"
          >
            {error && (
              <>
                <Error sx={{ verticalAlign: "middle", fontSize: "large", mr: 0.8 }} />
                {errorMessage}
              </>
            )}
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ mt: 3, mb: 1 }}>
          <CustomButton
            onClick={() => setError(!error)}
            sx={{ fontWeight: "bold", p: 1.3 }}
            variant="contained"
            type="submit"
            disabled={isConfirmBtnDisabled}
            fullWidth
          >
            ENTRAR
          </CustomButton>
        </Grid>
      </Grid>

      <Link
        sx={{ textUnderlineOffset: 2 }}
        color="#4A4A4A"
        href="#"
        underline="always"
      >
        <Typography align="center">Esqueceu a senha?</Typography>
      </Link>
    </StyledBox>
  );
}