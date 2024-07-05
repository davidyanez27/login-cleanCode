
import { Request, Response } from "express";
import { registerUser } from "../../domain/use-cases";
import { UserRepository } from '../../domain/repository';
import { RegisterUserDto } from "../../domain/dtos";

export class AuthController {

    // DI
    constructor(
        private readonly userRepository: UserRepository
    ){}

    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if ( error ) return res.status(400).json({error});
    }

    loginUser = (req: Request, res: Response) => {
        res.json('LoginUser');
    }

    ValidateUser = (req: Request, res: Response) => {
        res.json('ValidateUser');
    }

}