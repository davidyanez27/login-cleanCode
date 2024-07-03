import { LoginEntity, RegisterEntity } from "../entities";

export abstract class UserRepository{
    abstract registerUser( user: RegisterEntity): Promise<void>;
    abstract loginUser   ( user: LoginEntity   ): Promise<void>;
}