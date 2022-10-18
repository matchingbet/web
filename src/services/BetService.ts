import Bet from "../models/Bet";

export class BetService {

    public async getBets(): Promise<Bet[]> {
        return new Promise(resolve => setTimeout(() => {
            resolve([{ id: 1, description: "description", odd: 2 } as Bet]);
        }, 3000));
    }

}