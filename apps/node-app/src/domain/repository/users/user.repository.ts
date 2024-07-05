import { LoginUserDto, RegisterUserDto } from "../../dtos";
import { UserEntity } from "../../entities";

export abstract class UserRepository{
    abstract create( user: RegisterUserDto ): Promise<void>;
    abstract findById   ( user: LoginUserDto   ): Promise<void>;
    abstract updateById   ( user: LoginUserDto   ): Promise<void>;
    abstract deleteById   ( user: LoginUserDto   ): Promise<void>;

}