import { RegisterEntity } from "../../entities";

interface RegisterUseCase {
        execute(user: RegisterEntity): Promise<boolean>;
}

export class registerUser implements RegisterUseCase {
        
        
        execute(user: RegisterEntity): Promise<boolean> {
                throw new Error("Method not implemented.");
        }

}