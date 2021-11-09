import { CreatePostDto } from './post-create.model';
import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateDateColumn } from 'typeorm';

export class EditPostDto extends PartialType(
  OmitType(CreatePostDto, ['slug'] as const),
) {
  @CreateDateColumn({
    generated: true,
  })
  editDate: Date;
}
