import { User } from "../models/User";
import UserCreation from "../models/UserCreation";

export interface IUserService {
    createUser: (user: UserCreation) => Promise<User>;
    getUserById: (id: number) =>  Promise<User>;
    updateUser: (user: UserCreation) => Promise<User>;
    updatePassword: (userId: number, actualCryptedPass: string, newCryptedPass: string) => void;
    getGroupsByUserId: (userId: number) => any;
    updateUserGroupById: (userId: number, groupingId: number) => any;
    deleteUserGroupById: (userId: number, groupingId: number) => any;
}