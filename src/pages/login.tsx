import { Error, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel, Grid, IconButton,
  InputAdornment,
  Link,
  styled,
  TextField,
  Typography
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import CustomButton from "../components/CustomButton";
import { StyledAvatar } from "../components/StyledAvatar/StyledAvatar";
import { Credentials } from "../models/Credentials";
import { AuthService } from "../services/AuthService";
import useSecurityStore from "../stores/SecurityStore";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "14rem",
    height: "100vh",
    margin: "0 auto",
    padding: "4rem 0 2rem 0",
  },
  [theme.breakpoints.up("sm")]: {
    width: "16rem",
    height: "100vh",
    margin: "0 auto",
    padding: "6rem 0 3rem 0",
  },
}));

const authService = new AuthService();

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [saveInformation, setSaveInformation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isConfirmBtnDisabled, setIsConfirmBtnDisabled] = useState(true);
  const securityStore = useSecurityStore();
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>();


  useEffect(() => {
    if (securityStore.logged) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    setIsConfirmBtnDisabled(
      () =>
        !getUsernamePattern().test(username) ||
        password.length < 6 ||
        password.length > 12
    );
  }, [username, password]);

  useEffect(() => {
    const ref = usernameRef.current;
    ref?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authService
      .login({ username, password } as Credentials)
      .then((response) => {
        console.log(useSecurityStore.getState().logged);
        if (useSecurityStore.getState().logged) {
          router.push("/");
        } else{
          setErrorMessage("AJEITAR ISSO!")
        }
      })
      .catch((err) => setErrorMessage(err.error_description));
  };

  const handleShowPassword = (showPassword: boolean) => {
    setShowPassword(showPassword);
  };

  const getUsernamePattern = (): RegExp => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  return (
    <StyledBox>
      <StyledAvatar size={170} onClick={(__e) => router.push("/")} />
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
            label="E-mail"
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
                () => password.length < 6 || password.length > 16
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
        href="src/pages/login#"
        underline="always"
      >
        <Typography align="center">Esqueceu a senha?</Typography>
      </Link>
    </StyledBox>
  );
}
