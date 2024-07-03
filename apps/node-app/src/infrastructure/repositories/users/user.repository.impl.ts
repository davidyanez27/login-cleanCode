import { UserDatasource } from "../../../domain/datasources";
import { RegisterEntity, LoginEntity } from "../../../domain/entities";
import { UserRepository } from "../../../domain/repository";

export class UserRepositoryImpl implements UserRepository {

    constructor (
        private readonly userDatasource : UserDatasource,
    ){}

    registerUser(user: RegisterEntity): Promise<void> {
        return this.userDatasource.registerUser( user );
    }

    loginUser(user: LoginEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

}