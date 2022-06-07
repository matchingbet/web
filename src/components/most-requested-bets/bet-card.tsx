import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";

import BetCardProps from "../../models/BetCardProps";

const StyledCard = styled(Card)({
  maxWidth: 180,
  minWidth: 150,
  backgroundColor: "#D9D9D9",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  margin: "0 16px"
});

const StyledButton = styled(Button)({
  backgroundColor: "white",
  width: "100%",
});

const BetDetails = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const BetCounter = styled("div")({});

const StyledCardContent = styled(CardContent)({
  padding: "0 16px",
});

export default function MostRequestedBetCard(props: BetCardProps) {
  const { title, category, odd, betCounter } = props.bet;
  return (
    <StyledCard>
      <CardMedia
        sx={{ padding: "8px", borderRadius: 2 }}
        component="img"
        height="100"
        image="/default-img.jpg"
        alt="green iguana"
      />

      <StyledCardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>

        <BetDetails>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {category}
          </Typography>

          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            ods: {odd}
          </Typography>
        </BetDetails>

        <BetCounter>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {betCounter} apostadores
          </Typography>
        </BetCounter>
      </StyledCardContent>
      <CardActions>
        <StyledButton>PARTICIPAR</StyledButton>
      </CardActions>
    </StyledCard>
  );
}
