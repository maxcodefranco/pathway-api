import {
  BaseEntity,
  Column,
  Entity,
  EntityOptions,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DatabasesConnectionName } from '../definitions';

const baseEntityMetadata: EntityOptions = {
  schema: 'account',
  database: DatabasesConnectionName.MAIN_DATABASE_URL,
};

@Entity({ ...baseEntityMetadata, name: 'accounts' })
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  password_hash: string;
  @Column()
  password_salt: string;
}

@Entity({ ...baseEntityMetadata, name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  password_hash: string;
  @Column()
  password_salt: string;
}

@Entity({ ...baseEntityMetadata, name: 'profiles' })
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  birthDate: Date;
  @Column()
  address: string;
}
