import { regularExps } from "../../../config";
import { Roles } from "../../entities";
import { CustomError } from "../../errors/customs.error";

export class RegisterUserDto {
    constructor(
        public readonly name       : string,
        public readonly username   : string,
        public readonly email      : string,
        public readonly password   : string,
        public readonly firstName  : string,
        public readonly lastName   : string,
        public readonly role       : Roles,

    ){}


    static create( props: {[key:string]:any}): [string?, RegisterUserDto?]{
        const {name, username, email, password, firstName, lastName, role } = props;

        // if (!name) throw CustomError.badRequest('Missing name');
        // if (!username) throw CustomError.badRequest('Missing username');
        // if (!regularExps.email.test(email)) throw CustomError.badRequest('Missing email');
        // if( !regularExps.password.test(password)) throw CustomError.badRequest('password contains at least eight characters, one special characters, uppercase and one number');
        // if (!password) throw CustomError.badRequest('Missing password');
        // if (!firstName) throw CustomError.badRequest('Missing firstName');
        // if (!lastName) throw CustomError.badRequest('Missing lastName');
        // if (!role) throw CustomError.badRequest('Missing role');

        if( !name ) return ['Name property is required'];
        if( !username ) return ['username property is required'];
        if( !regularExps.email.test(email) ) return ['email property is required'];
        if( !password ) return ['password property is required'];
        if( !regularExps.password.test(password)) return ['password contains at least eight characters, one special characters, uppercase and one number'];
        if( !firstName ) return ['firstName property is required'];
        if( !lastName ) return ['lastName property is required'];
        if( !role ) return ['role property is required'];
        
        return [undefined, new RegisterUserDto(name, username, email, password, firstName, lastName, role)];
    }

}

