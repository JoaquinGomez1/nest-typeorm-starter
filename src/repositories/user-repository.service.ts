import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import UserModel from '../domain/models/user.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepositoryService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAll() {
    const data = await this.userRepository.find();
    const array: UserModel[] = new Array(data.length).fill(new UserModel());
    const users = Object.assign([...array], [...data]);
    return users;
  }

  async getByEmail(email: string) {
    const data = await this.userRepository.findOne({ email });

    if (!data) return null;

    const model = new UserModel();

    return Object.assign(data, model) as UserModel;
  }

  async getById(id: number) {
    const data = await this.userRepository.findOne({ id });
    const model: UserModel = new UserModel();

    return Object.assign(data, model);
  }

  async insert(user: UserModel) {
    const entity = this.userRepository.create(user as any);
    await this.userRepository.save(entity);

    return Object.assign(user, entity);
  }

  async update(id: number, post: UserModel) {
    const entity = await this.userRepository.findOne({ id });

    if (!entity) throw new NotFoundException();

    const edited = Object.assign(entity, post);

    await this.userRepository.save(edited);
    return edited;
  }

  async delete(id: number) {
    await this.userRepository.delete({ id });
  }
}
