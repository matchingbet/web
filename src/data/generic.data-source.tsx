import { Endpoints } from "../core/constants/endpoints";
import { HttpClient } from "../core/http-client-adapter";
import { Generic } from "../models/Generic";
import UserCreation from "../models/UserCreation";

export class GenericDataSource {

    private http: HttpClient = new HttpClient();

    public async getGenericByPageAndSize(page: number, size: number, query?: String): Promise<Generic[]> {
        let params:any = {page: page, size: size};
        if(query){
            params = {...params, query: query};
        }
        const response = await this.http.get(Endpoints.GENERIC, params);
        if (response.ok) {
            const genericResponse = await response.json();
            console.log(genericResponse["_embedded"]["genericEntitiesModelList"]);
            return genericResponse["_embedded"]["genericEntitiesModelList"] as Generic[];
        } else {
            throw Error(response.statusText);
        }
    }

}