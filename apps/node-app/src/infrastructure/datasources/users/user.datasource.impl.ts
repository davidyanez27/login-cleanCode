import { PrismaClient, Roles } from '@prisma/client';
import { UserDatasource } from '../../../domain/datasources';
import { UserEntity } from '../../../domain/entities';
import { LoginUserDto, RegisterUserDto } from '../../../domain/dtos';
import { prisma } from '../../../data/postgres';
import { CustomError } from '../../../domain/errors/customs.error';



const rolesEnum = {
    admin: Roles.ADMIN,
    user: Roles.USER
}

export class UserDatasourceImpl implements UserDatasource {
    async create(user: RegisterUserDto): Promise<void> {
        const existUser = await prisma.userModel.findUnique({where:{email:user.email}})
        if (existUser) throw CustomError.badRequest('email alredy exists');
        const role = rolesEnum[user.role]
        const newUser = await prisma.userModel.create(
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