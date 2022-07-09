import {styled} from "@mui/material";
import Bet from "../../models/Bet";
import MostRequestedBetCard from "./BetCard";

interface MostRequestedBetsProps {
    mostRequestedBets: Array<Bet>;
    size?: number
}

function MostRequestedBets({mostRequestedBets, size}: MostRequestedBetsProps) {
    const StyledBetsList = styled("div")({
        display: "flex",
        flexDirection: "column",
    });

    return (
        <StyledBetsList>
            {mostRequestedBets.slice(0, size || 5).map((betItem, index) => (
                <MostRequestedBetCard key={index} bet={betItem}/>
            ))}
        </StyledBetsList>
    );
}

export default MostRequestedBets;
