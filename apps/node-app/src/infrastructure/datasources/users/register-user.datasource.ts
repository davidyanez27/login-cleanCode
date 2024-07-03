import { PrismaClient, Roles } from '@prisma/client';
import { UserDatasource } from '../../../domain/datasources';
import { RegisterEntity, LoginEntity } from '../../../domain/entities';


const prismaClient = new PrismaClient();
const rolesEnum = {
    admin: Roles.ADMIN,
    user: Roles.USER
}

export class RegisterUserDatasource implements UserDatasource {
    async registerUser(user: RegisterEntity): Promise<void> {

        const role = rolesEnum[user.role]
        const newUser = await prismaClient.userModel.create(
            {
                data: {
                    ...user,
                    role: role
                }
            }
        )
        console.log(newUser)
    }



    loginUser(user: LoginEntity): Promise<void> {
        throw new Error('Method not implemented.');
    }

}