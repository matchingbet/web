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
      onClick={onClick}
      sx={{ width: size, height: size, cursor: "pointer" }}
      src={photoUrl}
    />
  );
}