import { Roles } from '@prisma/client';
import { UserDatasource } from '../../../domain/datasources';
import { UserEntity } from '../../../domain/entities';
import { LoginUserDto, RegisterUserDto } from '../../../domain/dtos';
import { prisma } from '../../../data/postgres';
import { CustomError } from '../../../domain/errors/customs.error';
import { bcryptAdapter } from '../../../config';



export const rolesEnum = {
    admin: Roles.ADMIN,
    user: Roles.USER
}


export class UserDatasourceImpl implements UserDatasource {
    async create(user: RegisterUserDto): Promise<UserEntity> {
        const existUser = await prisma.userModel.findUnique({ where: { email: user.email } })
        if (existUser) throw CustomError.badRequest('email alredy exists');
        const role = rolesEnum[user.role]
        const newUser = await prisma.userModel.create(
            {
                data: {
                    ...user,
                    password: bcryptAdapter.hash(user.password),
                    role
                }
            }
        )
        console.log(newUser)
        
        return UserEntity.fromObject(newUser);

    }
    async findById(user: LoginUserDto): Promise<UserEntity> {
        const existUser = await prisma.userModel.findUnique({ where: { email: user.email}})
        if(!existUser) throw CustomError.badRequest('Invalid Credentials');
        
        const isMatching = bcryptAdapter.compare(user.password, existUser.password);
        if (!isMatching) throw CustomError.badRequest('Invalid Credentials');
        
        return UserEntity.fromObject(existUser);
    }
    updateById(user: LoginUserDto): Promise<void> {
        throw new Error('Method not implemented.');
    }
    deleteById(user: LoginUserDto): Promise<void> {
        throw new Error('Method not implemented.');
    }



}