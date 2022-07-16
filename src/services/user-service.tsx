import UserCreation from "../models/UserCreation";
import {User} from "../models/User";
import {Endpoints} from "../core/constants/endpoints";
import {HttpClient} from "../core/http-client-adapter";

const http = new HttpClient();

export const createUser = (user: UserCreation) => {

    const userObj = {
        cryptedPass: user.password,
        userName: `${user.firstName} ${user.lastName}`,
        userEmail: user.email,
        description: "",
        govNumber: user.cpf,
        birthday: user.birthDate,
        photo: ""
    };

    return http.post<User>(Endpoints.USERS, userObj);

};



