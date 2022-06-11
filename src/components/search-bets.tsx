import { styled, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const SearchInput = styled(TextField)({
  display: "flex",
  justifyContent: "space-between",
  color: "#ffffff",
});

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid #3308FF`,
          },
      },
      }
    }
  },
});

export default function SearchBets() {
  return (
    <ThemeProvider theme={theme}>
      <SearchInput
        id="outlined-basic"
        placeholder="Busque por nome ou código da aposta"
        variant="outlined"
        sx={{ input: { color: "#ffffff" }, outline: { color: "#ffffff" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: "#ffffff" }}>
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
}
