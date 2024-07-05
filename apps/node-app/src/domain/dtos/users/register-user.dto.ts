import { Roles } from "../../entities";

export class RegisterUserDto {
    constructor(
        public readonly name       : string,
        public readonly username   : string,
        public readonly email      : string,
        public readonly password   : string,
        public readonly firstName  : string,
        public readonly lastName   : string,
        public readonly role       : Roles,
        public readonly createdAt ?: Date,
        public readonly updateddAt?: Date,
    ){}


    static create( props: {[key:string]:any}): [string?, RegisterUserDto?]{
        const {name, username, email, password, firstName, lastName, role } = props;

        if( !name ) return ['Name property is required', undefined];
        return [undefined, new RegisterUserDto(name, username, email, password, firstName, lastName, role)];
    }

}

