import { PrismaClient, Roles } from '@prisma/client';
import { UserDatasource } from '../../../domain/datasources';
import { UserEntity } from '../../../domain/entities';
import { LoginUserDto, RegisterUserDto } from '../../../domain/dtos';


const prismaClient = new PrismaClient();
const rolesEnum = {
    admin: Roles.ADMIN,
    user: Roles.USER
}

export class RegisterUserDatasource implements UserDatasource {
    async create(user: RegisterUserDto): Promise<void> {
                const role = rolesEnum[user.role]
        const newUser = await prismaClient.userModel.create(
               {
                   data: {
                       ...user,
                       role
                   }
               }
           )

        }
    findById(user: LoginUserDto): Promise<void> {
        throw new Error('Method not implemented.');
    }
    updateById(user: LoginUserDto): Promise<void> {
        throw new Error('Method not implemented.');
    }
    deleteById(user: LoginUserDto): Promise<void> {
        throw new Error('Method not implemented.');
    }



}