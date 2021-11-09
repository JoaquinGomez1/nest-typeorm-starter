import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from '../domain/models/post-create.model';
import { EditPostDto } from '../domain/models/post-edit.model';
import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly _postService: PostService) {}

  @Get()
  async get() {
    return await this._postService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this._postService.getById(id);
  }

  @Post()
  async insterPost(@Body() dto: CreatePostDto) {
    return await this._postService.insert(dto);
  }

  @Put(':id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditPostDto,
  ) {
    return await this._postService.update(id, dto);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    return await this._postService.delete(id);
  }
}
