import { Button } from '@mui/material';

interface CommonButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export function CommonButton({ text, type }: CommonButtonProps) {
  return (
    <Button sx={{ fontWeight: 'bold', p: 1.3}} type={ type } variant='contained' fullWidth>
      { text }
    </Button>
  );
}