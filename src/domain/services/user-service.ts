import AppResponse from '../models/response.model';
import UserLoginModel from '../models/user-login.model';
import UserRegisterModel from '../models/user-register.model';
import UserModel from '../models/user.model';

export default interface IUserService {
  register: (model: UserRegisterModel) => Promise<AppResponse<UserModel>>;

  login: (model: UserLoginModel) => Promise<AppResponse<UserModel>>;
}
