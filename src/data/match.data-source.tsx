import { Endpoints } from "../core/constants/endpoints";
import { HttpClient } from "../core/http-client-adapter";
import Match from "../models/Match";

export class MatchDataSource {

    private http: HttpClient = new HttpClient();

    public async getMatchById(id: number): Promise<Match> {
        const response = await this.http.getById(Endpoints.MATCHES, id);
        if (response.ok) {
            const matchResponse = await response.json();
            matchResponse["expiredAt"] = matchResponse["expiredAt"]?new Date(matchResponse["expiredAt"]).getDate():null;
            matchResponse["createdAt"] = matchResponse["createdAt"]?new Date(matchResponse["createdAt"]).getDate():null;
            return matchResponse as Match;
        } else {
            throw Error(response.statusText);
        }
    }

}