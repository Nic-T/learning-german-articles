import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'article', type: 'varchar', length: 3 })
  article: string;

  @Column({ name: 'word', type: 'varchar', length: 255 })
  word: string;
}
