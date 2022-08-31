import UserCreation from "../models/UserCreation";
import {User} from "../models/User";
import {Endpoints} from "../core/constants/endpoints";
import {HttpClient} from "../core/http-client-adapter";

interface UserServiceType {
    createUser: (user: UserCreation) => Promise<User>;
    getUserById: (id: number) =>  Promise<User>;
    updateUser: (user: UserCreation) => Promise<User>;
    updatePassword: (userId: number, actualCryptedPass: string, newCryptedPass: string) => void;
    getGroupsByUserId: (userId: number) => any;
    updateUserGroupById: (userId: number, groupingId: number) => any;
    deleteUserGroupById: (userId: number, groupingId: number) => any;
}

export class UserService implements UserServiceType {

    private http: HttpClient  = new HttpClient();

    public async createUser(user: UserCreation): Promise<User> {

        const userObj = {
            cryptedPass: user.password,
            userName: `${user.firstName} ${user.lastName}`,
            userEmail: user.email,
            description: "",
            govNumber: user.cpf,
            birthday: user.birthDate,
            photo: ""
        };

        return this.http.post<User>(Endpoints.USERS, userObj);
    };

    public async getUserById(id: number): Promise<User>{
        return this.http.getById<User>(Endpoints.USERS, id);
    }

    public async updateUser(user: UserCreation): Promise<User> {

        const userObj = {
            cryptedPass: user.password,
            userName: `${user.firstName} ${user.lastName}`,
            userEmail: user.email,
            description: "",
            govNumber: user.cpf,
            birthday: user.birthDate,
            photo: ""
        };

        return this.http.update<User>(Endpoints.USERS, userObj);
    }

    updatePassword(userId: number, actualCryptedPass: string, newCryptedPass: string): void {
        this.http.update(Endpoints.USERS, {actualCryptedPass, newCryptedPass}, userId).then();
    }

    deleteUserGroupById(userId: number, groupingId: number): any {
    }

    getGroupsByUserId(userId: number): any {
    }

    updateUserGroupById(userId: number, groupingId: number): any {
    }

}
