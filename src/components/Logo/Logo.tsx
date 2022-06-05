import { Avatar } from "@mui/material";

interface LogoProps {
  size: number;
}

export function Logo({ size }: LogoProps) {
  return (
    <Avatar
      sx={{ width: size, height: size, margin: '0 auto' }}
      src=''
    />
  );
}