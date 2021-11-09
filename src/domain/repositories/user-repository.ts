import UserModel from '../models/user.model';

export default interface IUserRepository {
  insert: (dto: UserModel) => Promise<UserModel>;
  getAll: () => Promise<UserModel[]>;
  getById: (id: number) => Promise<UserModel>;
  update: (id: number, dto: UserModel) => Promise<UserModel>;
  delete: (id: number) => Promise<void>;
  getByEmail: (email: string) => Promise<UserModel>;
}
