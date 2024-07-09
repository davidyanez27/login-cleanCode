export class LoginUserDto {
    constructor(
        public readonly email:string,
        public readonly password: string,
    ){}

    static login ( props: { [key:string]:any}): [string?, LoginUserDto?]{
        const{email, password} = props;

        
        if( !email ) return ['email property is required', undefined];
        if( !password ) return ['password property is required', undefined];
        return [undefined, new LoginUserDto(email, password)]
    }

}