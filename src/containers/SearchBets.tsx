import { styled, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import { ISearchProps } from "../types/SearchProps";

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SearchBets(props: ISearchProps) {
  
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

  let queryStr:string;

  
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>  ) => {
    queryStr = e.target.value;
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.nativeEvent.code === "Enter"){
      props.search(queryStr)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchInput
        id="outlined-basic"
        placeholder="Busque matches e bookmakers"
        variant="outlined"
        onKeyUp={onKeyUp}
        onChange={onTextChange}
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
