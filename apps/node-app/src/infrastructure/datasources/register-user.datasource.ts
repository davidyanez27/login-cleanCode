import { UserDatasource } from '../../domain/datasources';
import { RegisterEntity, LoginEntity } from '../../domain/entities';

export class RegisterUserDatasource implements UserDatasource{
    registerUser(user: RegisterEntity): Promise<void> {
        throw new Error('Method not implemented.');
    }
    loginUser(user: LoginEntity): Promise<void> {
        throw new Error('Method not implemented.');
    }

}