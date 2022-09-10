import {Category} from "../models/Category";
import {HttpClient} from "../core/http-client-adapter";

interface BetServiceType {
    getCategories: () => Promise<Category[]>;
}

export class BetService implements BetServiceType {

    private http = new HttpClient();

    public async getCategories(): Promise<Category[]> {


        const categories = await this.http.get<Category[]>(
            "api/categories",
            undefined,
            {baseUrl: "http://localhost:3000"}
        );
        console.log(categories);
        return categories;
    }

}