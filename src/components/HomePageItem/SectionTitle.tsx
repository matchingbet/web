import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import SectionTitlePropos from "../../models/SectionTitlePropos";
import { Button } from '@mui/material';

export default function SectionTitle(props: SectionTitlePropos) {
  const { title, showSeeMore, seeMoreHandler } = props;

  const TitleButtonHolder = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline"
  });
  
  const StyledTitle = styled(Typography)({
    margin: "3vh 0 1vh 0",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
  });
  
  const StyledButton = styled(Button)({
    color: "white",
    fontSize: "0.8rem",
    textTransform: "capitalize"
  })

  return (
    <TitleButtonHolder>
      <StyledTitle variant="h1">{title}</StyledTitle>

      { (showSeeMore && seeMoreHandler) && 
        <StyledButton onClick={seeMoreHandler}>{"Ver todas"}</StyledButton>}
    </TitleButtonHolder>
  );
}
