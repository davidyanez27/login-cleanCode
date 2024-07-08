import { RegisterUserDto } from "../../dtos";
import { CustomError } from "../../errors/customs.error";

export enum Roles {
    admin = 'admin',
    user = 'user',
}


export class UserEntity {

    constructor(
        public name: string,
        public username: string,
        public email: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public role: Roles,
        public createdAt?: Date,
        public updateddAt?: Date,

    ) { }

    static fromObject(object: { [key: string]: any }) {
        const {name, username, email, password, firstName, lastName, role, createdAt, updateddAt} = object

        if (!name) throw CustomError.badRequest('Missing name');
        if (!username) throw CustomError.badRequest('Missing username');
        if (!email) throw CustomError.badRequest('Missing email');
        if (!password) throw CustomError.badRequest('Missing password');
        if (!firstName) throw CustomError.badRequest('Missing firstName');
        if (!lastName) throw CustomError.badRequest('Missing lastName');
        if (!role) throw CustomError.badRequest('Missing role');
        if (!createdAt) throw CustomError.badRequest('Missing createdAt');
        if (!updateddAt) throw CustomError.badRequest('Missing updateddAt');
        return new UserEntity( name, username, email, password, firstName, lastName, role, createdAt, updateddAt)
    }
}

