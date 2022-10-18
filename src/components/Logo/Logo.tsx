import {Box, CardMedia} from "@mui/material";
import {MouseEventHandler} from "react";
import Logo3 from "../../../public/images/Logo.png";

interface LogoProps {
    size: number;
    onClick?: MouseEventHandler,
    src: string;
}

export function Logo() {
  return (
   <Box
        component="img"
        sx={{
          height: 31,
          width: 186,
        }}
        alt="MatchingBet"
        src="../../../public/images/Logo.png"
      />
  );
}