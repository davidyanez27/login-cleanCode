export class LoginUserDto {
    constructor(
        public readonly username:string,
        public readonly password: string,
    ){}

    static login ( props: { [key:string]:any}): [string?, LoginUserDto?]{
        const{username, password} = props;

        
        if( !username ) return ['Name property is required', undefined];
        if( !password ) return ['Name property is required', undefined];
        return [undefined, new LoginUserDto(username, password)]
    }

}