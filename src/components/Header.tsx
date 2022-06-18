import Link from "next/link";

import { styled, Typography, useTheme } from "@mui/material";

export default function Header() {

  const StyledHeader = styled("header")({
    padding: ["0", "0 5vw"],
    margin: "0",
    background: "#370365",
    color: "#FFFFFF",
    height: "8vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  });
  
  const theme = useTheme();
  
  const StyledLinkContainer = styled("div")({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "30vw",
    [theme.breakpoints.up('md')]: {
      width: "15vw"
    },
    [theme.breakpoints.up('lg')]: {
      width: "10vw"
    }
  });

  return (
    <StyledHeader>
      <Typography variant="h2">
        <a className="hover:underline">Matching-bet</a>
      </Typography>

      <StyledLinkContainer>
        <Link href="/login">
          <a className="hover:underline">Login</a>
        </Link>

        <Link href="/register" style={{ paddingLeft: "5px" }}>
          <a className="hover:underline">Registro</a>
        </Link>
      </StyledLinkContainer>
    </StyledHeader>
  );
}
