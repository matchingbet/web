import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import SectionTitleProps from "../types/SectionTitleProps";
import { Button } from '@mui/material';

export default function SectionTitle(props: SectionTitleProps) {
  const { title, showSeeMore, seeMoreHandler, description } = props;

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
    color: "white"
  });

  const StyledDescription = styled(Typography)({
    margin: "0 0 1vh 0",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    color: "white"
  });

  const StyledButton = styled(Button)({
    color: "#6B61F5",
    fontSize: "10px",
    textTransform: "capitalize"
  })

  return (
    <div>
      <TitleButtonHolder>

        <StyledTitle variant="h1">{title}</StyledTitle>

        {(showSeeMore && seeMoreHandler) &&
          <StyledButton onClick={seeMoreHandler}>{"VER TODOS"}</StyledButton>}

      </TitleButtonHolder>

      { !!description && <StyledDescription>{description}</StyledDescription> }

    </div>

  );
}
