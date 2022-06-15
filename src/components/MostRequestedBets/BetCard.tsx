import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import BetCardProps from "../../models/BetCardProps";

export default function MostRequestedBetCard(props: { bet: BetCardProps }) {

  const StyledCard = styled(Card)({
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "5px 0",
    border: `1px solid white`,
  });

  const StyledCardContent = styled(CardContent)({
    padding: "0 !important",
    display: "flex",
    justifyContent: "space-between",
  });

  const StyledBox = styled(Box)({
    padding: "1rem .3rem",
    width: "40vw",
    textAlign: "center",
    ":first-of-type": {
      backgroundColor: "#503071",
      maxWidth: "15vw",
      width: "10rem",
      "@media (min-width:300px)": {
        width: "5rem",
        minWidth: "15vw",
      },
      "@media (min-width:600px)": {
        width: "12rem",
        minWidth: "10vw",
      },
    },
    ":last-child": {
      backgroundColor: "#503071",
      "@media (min-width:300px)": {
        width: "6rem",
      },
      "@media (min-width:600px)": {
        width: "12rem",
      },
    },
  });

  const { title, date, hour, odds } = props.bet;
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledBox>
          <Typography variant={"body1"} gutterBottom>
            {date}
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            {hour}
          </Typography>
        </StyledBox>

        <StyledBox>
          <Typography variant={"body1"} gutterBottom>
            {title}
          </Typography>
        </StyledBox>

        <StyledBox>
          <Typography variant={"body1"} gutterBottom>
            {"1"} {"X"} {"2"}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
            }}
            variant={"body1"}
            gutterBottom
          >
            {"1.2"} {"2.5"} {"1.3"}
          </Typography>
        </StyledBox>
      </StyledCardContent>
    </StyledCard>
  );
}
