import { Avatar } from "@mui/material";
import { MouseEventHandler } from "react";

interface StyledAvatarProps {
  photoUrl?: string;
  size: number;
  onClick?: MouseEventHandler,
}

export function StyledAvatar({ photoUrl, size, onClick }: StyledAvatarProps) {
  return (
    <Avatar
      no-referrer
      onClick={onClick}
      sx={{ width: size, height: size, margin: "0 auto", cursor: "pointer" }}
      src={photoUrl}
    />
  );
}