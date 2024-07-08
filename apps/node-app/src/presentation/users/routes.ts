import { Router } from "express";
import { AuthController } from "./controller";
import { UserRepositoryImpl } from "../../infrastructure/repositories/users/user.repository.impl";
import { UserDatasourceImpl } from "../../infrastructure/datasources";

export class Authroutes {
    public static get routes():Router{
        const router = Router();

        const datasource = new UserDatasourceImpl();
        const userRepository = new UserRepositoryImpl(datasource)

        const controller = new AuthController(userRepository);

        router.post('/login', controller.loginUser);
        router.post('/register', controller.registerUser);

        router.get('/validate-email/:token', controller.ValidateUser);

        return router;
    }
}