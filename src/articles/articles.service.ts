import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private readonly repository: Repository<Article>,
  ) {}

  public async create(createArticleDto: CreateArticleDto) {
    return await this.repository.save(createArticleDto);
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  public async update(id: string, updateArticleDto: UpdateArticleDto) {
    const updatedArticle = await this.repository.findOneOrFail(id);
    if (!updatedArticle.id) {
      return 'Item does not exist';
    }

    await this.repository.update(id, updateArticleDto);
    return await this.repository.findOne(id);
  }

  public async remove(id: string) {
    return await this.repository.delete(id);
  }
}
