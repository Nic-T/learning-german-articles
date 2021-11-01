import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ example: 'die' })
  @IsString()
  @IsNotEmpty()
  article: string;

  @ApiProperty({ example: 'Katze' })
  @IsString()
  @IsNotEmpty()
  word: string;
}
