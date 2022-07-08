import { styled } from "@mui/material";
import BetCardProps from "../../models/BetCardProps";
import MostRequestedBetCard from "./bet-card";

const StyledBetsList = styled("div")({
  display: "flex",
  flexDirection: "column",
});

interface MostRequestedBetsProps {
  mostRequestedBets: Array<BetCardProps>;
}

function MostRequestedBets({ mostRequestedBets }: MostRequestedBetsProps) {

  console.log(mostRequestedBets)

  return (
    <StyledBetsList>
      {mostRequestedBets.slice(0, 5).map((betItem, index) => (
        <MostRequestedBetCard key={index} bet={betItem} />
      ))}
    </StyledBetsList>
  );
}

export default MostRequestedBets;
