import { UserEntity, Roles } from "../../entities";
import { UserRepository } from "../../repository";

interface RegisterUseCase {
        execute(user: UserEntity): Promise<UserEntity>;
}

export class RegisterUser implements RegisterUseCase {
        constructor(
                private readonly repository: UserRepository
        ) { }

        execute(user: UserEntity): Promise<UserEntity> {
                return this.repository.create(user);
        }

}