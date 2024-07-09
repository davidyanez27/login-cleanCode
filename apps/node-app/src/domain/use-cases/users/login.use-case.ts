import { LoginUserDto } from "../../dtos";
import { UserEntity } from "../../entities";
import { UserRepository } from "../../repository";


interface LoginUseCase {
    execute(user:LoginUserDto): Promise<UserEntity>
}

export class LoginUser implements LoginUseCase{
    constructor (
        private readonly repository: UserRepository
    ) {}
    
    execute(user: LoginUserDto): Promise<UserEntity> {
        return this.repository.findById(user);
    }

}