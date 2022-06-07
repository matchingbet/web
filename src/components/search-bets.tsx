import { styled, TextField } from "@mui/material";
import SectionGroup from "./section-group/section-group";

const SearchInput = styled(TextField)({
  display: "flex",
  justifyContent: "space-between",
});

export default function SearchBets() {
  return (
    <SearchInput id="outlined-basic" label="Outlined" variant="outlined" />
  );
}
