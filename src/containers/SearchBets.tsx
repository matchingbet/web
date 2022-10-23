import { styled, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SearchBets() {

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
              borderRadius: '25px 25px',
            },
        },
        }
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SearchInput
        id="outlined-basic"
        placeholder="Busque matches e bookmakers"
        variant="outlined"
        sx={{ input: { color: "#ffffff" }, outline: { color: "#ffffff" }, background: "linear-gradient(108.8deg, rgba(255, 255, 255, 0.2) 14.74%, rgba(0, 0, 0, 0) 97.96%)", borderRadius: '25px 25px', }}
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
