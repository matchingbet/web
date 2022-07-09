import UserCreation from "../../models/UserCreation";

export const userTest: UserCreation = {
    firstName: "firstname",
    lastName: "lastname",
    cpf: "00000000000",
    birthDate: new Date(20, 20, 2000),
    email: "teste@teste.com",
    password: "123456",
    acceptedTerms: true
}