import { MatchDataSource } from "../data/match.data-source";
import Match from "../models/Match";

export class MatchService {

    private matchDataSource: MatchDataSource = new MatchDataSource();

    public async getMatchById(id: number): Promise<Match> {
        return await this.matchDataSource.getMatchById(id);
    }
}
