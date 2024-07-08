import { regularExps } from "../../../config";
import { entityRoles } from "../../entities";

export class RegisterUserDto {
    constructor(
        public readonly name       : string,
        public readonly username   : string,
        public readonly email      : string,
        public readonly password   : string,
        public readonly firstName  : string,
        public readonly lastName   : string,
        public readonly role       : entityRoles,

    ){}


    static create( props: {[key:string]:any}): [string?, RegisterUserDto?]{
        const {name, username, email, password, firstName, lastName, role } = props;
        const validRoles = Object.values(entityRoles);

        if( !name ) return ['Name property is required'];
        if( !username ) return ['username property is required'];
        if( !regularExps.email.test(email) ) return ['email property is required'];
        if( !password ) return ['password property is required'];
        if( !regularExps.password.test(password)) return ['password contains at least eight characters, one special characters, uppercase and one number'];
        if( !firstName ) return ['firstName property is required'];
        if( !lastName ) return ['lastName property is required'];
        if( !role ) return ['role property is required'];
        if( !validRoles.includes(role) ) return [`Invalid role: ${role}. Valid roles are: ${validRoles.join(', ')}`];
        
        return [undefined, new RegisterUserDto(name, username, email, password, firstName, lastName, role)];
    }

}

