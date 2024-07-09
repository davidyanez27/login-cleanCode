
import { Request, Response } from "express";
import { LoginUser, RegisterUser} from "../../domain/use-cases";
import { UserRepository } from '../../domain/repository';
import { LoginUserDto, RegisterUserDto } from "../../domain/dtos";
import { CustomError } from "../../domain/errors/customs.error";
import { user } from '../../domain/entities/users/user.entity';

export class AuthController {

    // DI
    constructor(
        private readonly userRepository: UserRepository
    ){}

    private handleError = (error:unknown, res:Response) =>{
        if ( error instanceof CustomError) return res.status(error.statusCode).json({error:error.message});
        console.log(`${error}`);
        return res.status(500).json({error:'Internal server error'})
    }

    public registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if ( error ) return res.status(400).json({error});

        new RegisterUser( this.userRepository)
         .execute(registerUserDto!)
         .then(({name}) =>res.json(`Welcome ${name}`))
         .catch(error => this.handleError(error, res));

    }

    public loginUser = (req: Request, res: Response) => {
        const [error, loginUserDto] = LoginUserDto.login(req.body)
        if( error ) return res.status(400).json({error});

        console.log(loginUserDto)
        new LoginUser( this.userRepository )
         .execute(loginUserDto!)
         .then(({name})=>res.json(`Welcome back ${name}`))
         .catch(error => this.handleError(error, res));

    }

    ValidateUser = (req: Request, res: Response) => {
        res.json('ValidateUser');
    }

}