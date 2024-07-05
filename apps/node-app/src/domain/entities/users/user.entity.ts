import { RegisterUserDto } from "../../dtos";

export enum Roles {
    admin = 'admin',
    user  = 'user', 
}


export class UserEntity {

    constructor(
        public name       : string,
        public username   : string,
        public email      : string,
        public password   : string,
        public firstName  : string,
        public lastName   : string,
        public role       : Roles,
        public createdAt ?: Date,
        public updateddAt?: Date,

    ){}

}

