import Link from "next/link";

import { styled, Typography, useTheme } from "@mui/material";
import { StyledAvatar } from "./StyledAvatar/StyledAvatar";
import { useRouter } from "next/router";
import { StyledLink } from "../styles/shared-styles";
import useSecurityStore from "../stores/SecurityStore";
import { AuthService } from "../services/AuthService";
import { Logo } from "./Logo/Logo";
import { Dropdown } from "./Dropdown/Dropdown";
import { useState} from "react";
import LogoSVG from '../../public/images/LogoSVG.svg';

export default function CustomHeader() {
  const router = useRouter();
  const { logged } = useSecurityStore();
  const authService = new AuthService();
  const [open, setOpen] = useState(false);

  const StyledHeader = styled("header")({
    padding: ["0", "0 5vw"],
    margin: "0",
    background: "#370365",
    color: "#FFFFFF",
    height: "8vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const theme = useTheme();

  const StyledLinkContainer = styled("div")({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "30vw",
    [theme.breakpoints.up("md")]: {
      width: "15vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "10vw",
    },
  });

  const BrandWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
  });

  return (
    <StyledHeader>
      <BrandWrapper>
        <Logo></Logo>
      </BrandWrapper>
      <StyledLinkContainer>
        {!logged ? (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>

            <Link href="/signup" style={{ paddingLeft: "5px" }} className="hover:underline">
              Registro
            </Link>
          </>
        ) : (
          <>
            <p>Oi, Fulano</p>
            <StyledAvatar size={45}/>
          </>
        )}
      </StyledLinkContainer>
    </StyledHeader>
  );
}
