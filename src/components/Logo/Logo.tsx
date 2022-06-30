import { Avatar } from "@mui/material";
import { MouseEventHandler } from "react";

interface LogoProps {
  size: number;
  onClick?: MouseEventHandler
}

export function Logo({ size, onClick }: LogoProps) {
  return (
    <Avatar
      onClick={onClick}
      sx={{ width: size, height: size, margin: "0 auto", cursor: "pointer" }}
      src=""
    />
  );
}