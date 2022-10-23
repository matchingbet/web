import { Box, CardMedia } from "@mui/material";
import { MouseEventHandler } from "react";
import Image from 'next/image'

interface LogoProps {
  size: number;
  onClick?: MouseEventHandler,
  src: string;
}

export function Logo() {
  return (
    <Image src="/images/logo.svg" alt="me" width="186" height="31" />
  );
}
