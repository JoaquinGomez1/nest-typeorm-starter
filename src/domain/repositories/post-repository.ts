import { Post } from 'src/entities/post.entity';
import { CreatePostDto } from '../models/post-create.model';
import { EditPostDto } from '../models/post-edit.model';

export default interface IPostRepository {
  insert: (dto: CreatePostDto) => Promise<CreatePostDto>;
  getAll: () => Promise<Post[]>;
  getById: (id: number) => Promise<Post>;
  update: (id: number, dto: EditPostDto) => Promise<EditPostDto>;
  delete: (id: number) => Promise<void>;
}
