import Bookmaker from "../models/Bookmaker";

export class BookmakerService {

    public async getBookmakers(): Promise<Bookmaker[]> {
        return new Promise(resolve => setTimeout(() => {
            resolve([{ id: 1, description: "Descrição de um bookmaker", name: "João da Silva" } as Bookmaker]);
        }, 3000));
    }

}