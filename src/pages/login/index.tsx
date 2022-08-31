import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Box, Checkbox, FormControlLabel, IconButton, InputAdornment, Link, styled, TextField, Typography, Grid } from "@mui/material";
import { VisibilityOff, Visibility, Error } from "@mui/icons-material";

import {Logo} from "../../components/Logo/Logo";
import CustomButton from "../../components/CustomButton";
import useSecurityStore from "../../stores/SecurityStore";
import { Credentials } from "../../models/Credentials";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: "14rem",
    height: "100vh",
    margin: "0 auto",
    padding: "4rem 0 2rem 0",
  },
  [theme.breakpoints.up('sm')]: {
    width: "16rem",
    height: "100vh",
    margin: "0 auto",
    padding: "6rem 0 3rem 0",
  }
}));

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isUsernameInvalid, setIsUsernameInvalid] = useState<boolean>(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [saveInformation, setSaveInformation] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isConfirmBtnDisabled, setIsConfirmBtnDisabled] = useState<boolean>(true);

  const usernameRef = useRef<HTMLInputElement>();

  const { login, token, logged } = useSecurityStore();

  useEffect(() => {
    setIsConfirmBtnDisabled(
      () =>
        !getUsernamePattern().test(username) ||
        password.length < 8 ||
        password.length > 16
    );
  }, [username, password])

  useEffect(() => {
    const ref = usernameRef.current;
    ref?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!errorMessage) {
      setErrorMessage("Usuário ou senha inválidos.");
    } else {
      setErrorMessage("")
    }
    /*
      tiago.luks@gmail.com
      123456
    */
    
    login({ username, password } as Credentials);
    
    if (logged) {
      setUsername('');
      setPassword('');
      setShowPassword(false);
      setSaveInformation(false);
      setErrorMessage('');
      setIsConfirmBtnDisabled(true);

      console.log(token);

      router.push("/");
    } else {
      //setErrorMessage(err.message)
    }
  }

  const handleShowPassword = (showPassword: boolean) => {
    setShowPassword(showPassword);
  };

  const getUsernamePattern = (): RegExp => {
    return /^[A-Za-z][A-Za-z0-9_]{7,19}$/;
  }

  const router = useRouter();

  return (
    <StyledBox>
      <Logo size={170} onClick={(__e) => router.push("/")} />
      <Grid container component="form" onSubmit={handleSubmit} sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() =>
              setIsUsernameInvalid(() => !getUsernamePattern().test(username))
            }
            inputRef={usernameRef}
            type="text"
            label="Usuário"
            variant="standard"
            error={isUsernameInvalid}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() =>
              setIsPasswordInvalid(
                () => password.length < 8 || password.length > 16
              )
            }
            type={showPassword ? "text" : "password"}
            label="Senha"
            variant="standard"
            required
            fullWidth
            error={isPasswordInvalid}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleShowPassword(!showPassword)}
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
              color: "#4A4A4A",
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
            {!!errorMessage && (
              <>
                <Error
                  sx={{ verticalAlign: "middle", fontSize: "large", mr: 0.8 }}
                />
                {errorMessage}
              </>
            )}
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ mt: 3, mb: 1 }}>
          <CustomButton
            onSubmit={(e) => handleSubmit(e)}
            sx={{ fontWeight: "bold", p: 1.3 }}
            variant="contained"
            type="submit"
            disabled={false}
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