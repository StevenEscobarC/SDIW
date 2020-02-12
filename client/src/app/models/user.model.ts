export class UserModel{
    rol: number;
    firstName: String;
    firstLastName: String;
    password: String;
    email: String;
    phone: String;
    isLogged: boolean = false;
    user?: UserModel;
}