import { LoginUserDto, RegisterUserDto } from "../../dtos";
import { user, UserEntity } from "../../entities";

export abstract class UserRepository{
    abstract create( user: RegisterUserDto ): Promise<UserEntity>;
    abstract findById   ( user: LoginUserDto   ): Promise<UserEntity>;
    abstract updateById   ( user: LoginUserDto   ): Promise<void>;
    abstract deleteById   ( user: LoginUserDto   ): Promise<void>;

}