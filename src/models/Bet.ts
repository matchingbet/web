export default interface Bet {
  id: number;
  description: string;
  odd: number;
  innerBets?: InnerBet[]
}

interface InnerBet  {
  id: number;
  description: string;
  odd: number;
}