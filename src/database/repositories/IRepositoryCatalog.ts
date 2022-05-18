import { IUserRepository } from './userRepository/IUserRepository';

export default interface IRepositoryCatalog {
  user: IUserRepository;
}
