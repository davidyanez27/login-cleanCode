
import { Request, Response } from "express";
import { RegisterUser} from "../../domain/use-cases";
import { UserRepository } from '../../domain/repository';
import { RegisterUserDto } from "../../domain/dtos";

export class AuthController {

    // DI
    constructor(
        private readonly userRepository: UserRepository
    ){}

    public registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if ( error ) return res.status(400).json({error});

        // const user = await this.userRepository.create(registerUserDto!);
        // res.status(200).json('Usuario Creado correctamente');
        new RegisterUser( this.userRepository)
         .execute(registerUserDto!)
         .then(() =>res.json("user"))
         .catch(error => res.status(400).json(error));
    }

    loginUser = (req: Request, res: Response) => {
        res.json('LoginUser');
    }

    ValidateUser = (req: Request, res: Response) => {
        res.json('ValidateUser');
    }

}