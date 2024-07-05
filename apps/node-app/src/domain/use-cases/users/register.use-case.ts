import { UserEntity, Roles } from "../../entities";
import { UserRepository } from "../../repository";

interface RegisterUseCase {
        execute(user: UserEntity): Promise<void>;
}

export class RegisterUser implements RegisterUseCase {
        constructor(
                private readonly repository: UserRepository
        ) { }

        execute(user: UserEntity): Promise<void> {
                return this.repository.create(user);
        }

}