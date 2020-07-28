import User from '../infra/typeorm/entities/User';
import ICreateUsetDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    create(data: ICreateUsetDTO): Promise<User>;
    save(user: User): Promise<User>;
}
