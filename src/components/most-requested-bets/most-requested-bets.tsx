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
import MostRequestedBetCard from "./bet-card";

const StyledCard = styled(Card)({
  maxWidth: 180,
  backgroundColor: "#D9D9D9",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  ":first-child": {
    margin: "0 10px"
  }
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

const StyledBetsList = styled("div")({
  display: "flex",
  overflowX: "auto"
});

export default function MostRequestedBest() {
  const mostRequestedBets: Array<BetCardProps> = [
    {
      bet: {
        id: 0,
        title: "Título da aposta",
        category: "categoria",
        odd: "4.44",
        betCounter: "142.335",
      },
    },
    {
      bet: {
        id: 0,
        title: "Título da aposta",
        category: "categoria",
        odd: "4.44",
        betCounter: "142.335",
      },
    },
    {
      bet: {
        id: 0,
        title: "Título da aposta",
        category: "categoria",
        odd: "4.44",
        betCounter: "142.335",
      },
    },
  ];

  return (
    <StyledBetsList>
      {mostRequestedBets.map((betItem) => (
        <MostRequestedBetCard key={betItem.bet.id} bet={betItem.bet} />
      ))}
    </StyledBetsList>
  );
}
