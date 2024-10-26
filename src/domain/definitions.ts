import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum DatabasesConnectionName {
  MAIN_DATABASE_URL = 'MAIN_DATABASE_URL',
}

export abstract class BaseEntity {
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt?: Date;
  @DeleteDateColumn()
  deletedAt?: Date;
  @Column('uuid')
  createdBy: string;
}
