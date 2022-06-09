import { styled } from "@mui/material";
import BetCardProps from "../../models/BetCardProps";
import MostRequestedBetCard from "./bet-card";

const StyledBetsList = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export default function MostRequestedBets() {
  const mostRequestedBets: Array<BetCardProps> = [
    {
      id: 0,
      title: "Flamengo x Palmeiras Campeonato Brasileiro",
      date: "20/07",
      hour: "11:30",
      odds: ""
    },
    {
      id: 0,
      title: "Neymar vai fazer um gol no jogo do PSG x Barcelona.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    }, 
    {
      id: 0,
      title: "Bósnia e Luxemburgo ambos ganham.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    },    
    {
      id: 0,
      title: "Bolsonaro perde no segundo turno.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    },   
    {
      id: 0,
      title: "Bahia x São Paulo",
      date: "10/07",
      hour: "12:00",
      odds: ""
    }, 
    {
      id: 0,
      title: "Flamengo x Palmeiras Campeonato Brasileiro",
      date: "20/07",
      hour: "11:30",
      odds: ""
    },
    {
      id: 0,
      title: "Neymar vai fazer um gol no jogo do PSG x Barcelona.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    }, 
    {
      id: 0,
      title: "Bósnia e Luxemburgo ambos ganham.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    },    
    {
      id: 0,
      title: "Bolsonaro perde no segundo turno.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    },   
    {
      id: 0,
      title: "Bahia x São Paulo",
      date: "10/07",
      hour: "12:00",
      odds: ""
    },
    {
      id: 0,
      title: "Flamengo x Palmeiras Campeonato Brasileiro",
      date: "20/07",
      hour: "11:30",
      odds: ""
    },
    {
      id: 0,
      title: "Neymar vai fazer um gol no jogo do PSG x Barcelona.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    }, 
    {
      id: 0,
      title: "Bósnia e Luxemburgo ambos ganham.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    },    
    {
      id: 0,
      title: "Bolsonaro perde no segundo turno.",
      date: "10/07",
      hour: "12:00",
      odds: ""
    },   
    {
      id: 0,
      title: "Bahia x São Paulo",
      date: "10/07",
      hour: "12:00",
      odds: ""
    },  
  ];

  return (
    <StyledBetsList>
      {mostRequestedBets.slice(0, 5).map((betItem, index) => (
        <MostRequestedBetCard key={index} bet={betItem} />
      ))}
    </StyledBetsList>
  );
}
