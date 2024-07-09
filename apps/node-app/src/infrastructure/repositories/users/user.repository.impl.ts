import { UserDatasource } from "../../../domain/datasources";
import { RegisterUserDto, LoginUserDto } from "../../../domain/dtos";
import { UserEntity } from "../../../domain/entities";
import { UserRepository } from "../../../domain/repository";

export class UserRepositoryImpl implements UserRepository {

    constructor (
        private readonly userDatasource : UserDatasource,
    ){}
    create(user: RegisterUserDto): Promise<UserEntity> {
        return this.userDatasource.create( user );
    }
    findById(user: LoginUserDto): Promise<UserEntity> {
       return this.userDatasource.findById( user );
    }
    updateById(user: LoginUserDto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteById(user: LoginUserDto): Promise<void> {
        throw new Error("Method not implemented.");
    }




}