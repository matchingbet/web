import {Avatar} from "@mui/material";
import {MouseEventHandler} from "react";

interface StyledAvatarProps {
    size: number;
    onClick?: MouseEventHandler,
}

export function StyledAvatar({ size, onClick }: StyledAvatarProps) {
  return (
    <Avatar
      onClick={onClick}
      sx={{ width: size, height: size, margin: "0 auto", cursor: "pointer" }}
      src=""
    />
  );
}