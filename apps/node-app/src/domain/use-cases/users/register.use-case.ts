import { RegisterUserDto } from "../../dtos";
import { UserEntity } from "../../entities";
import { UserRepository } from "../../repository";

interface RegisterUseCase {
        execute(user: RegisterUserDto): Promise<UserEntity>;
}

export class RegisterUser implements RegisterUseCase {
        constructor(
                private readonly repository: UserRepository
        ) { }

        execute(user: RegisterUserDto): Promise<UserEntity> {
                return this.repository.create(user);
        }

}