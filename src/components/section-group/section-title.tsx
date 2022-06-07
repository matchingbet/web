import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import SectionTitlePropos from "../../models/SectionTitlePropos";

const StyledTitle = styled(Typography)({
  margin: "1vh 0",
});

export default function SectionTitle(props: SectionTitlePropos) {
  const { title } = props;

  return <StyledTitle color="text.primary">{title}</StyledTitle>;
}
