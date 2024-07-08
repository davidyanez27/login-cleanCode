
import { Request, Response } from "express";
import { RegisterUser} from "../../domain/use-cases";
import { UserRepository } from '../../domain/repository';
import { RegisterUserDto } from "../../domain/dtos";
import { CustomError } from "../../domain/errors/customs.error";

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
        console.log(error)

        // const user = await this.userRepository.create(registerUserDto!);
        // res.status(200).json('Usuario Creado correctamente');
        new RegisterUser( this.userRepository)
         .execute(registerUserDto!)
         .then((user) =>res.json(user))
         .catch(error => this.handleError(error, res));
    }

    loginUser = (req: Request, res: Response) => {
        res.json('LoginUser');
    }

    ValidateUser = (req: Request, res: Response) => {
        res.json('ValidateUser');
    }

}