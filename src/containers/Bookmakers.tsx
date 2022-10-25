import {styled, Typography} from "@mui/material";
import BookmakerCard from "../components/BookmakerCard/BookmakerCard";
import Bookmaker from "../models/Bookmaker";
import SectionTitle from "./SectionTitle";

interface BookmakersProps {
    bookmakers?: Array<Bookmaker>;
    size?: number
}

function Bookmakers({bookmakers, size}: BookmakersProps) {
    const StyledBookmakersList = styled("div")({
        display: "flex",
        flexDirection: "column",
    });

    return (
        <>
        {
            bookmakers && bookmakers.length ? <StyledBookmakersList>
                {bookmakers.slice(0, size || 5).map((bookmakerItem, index) => (
                    <BookmakerCard key={index} bookmaker={bookmakerItem}/>
                ))}
            </StyledBookmakersList> : <div><Typography sx={{color:"white", textAlign: "center", marginTop: "10vh", marginBottom: "10vh"}}>nenhum bookmaker disponível</Typography></div>
        }</>
    );
}

export default Bookmakers;
