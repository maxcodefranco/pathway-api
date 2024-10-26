import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MainDatabaseConfiguration } from './database.configuration';
import { dataSourceOptions } from '../../ormconfig';
import {
  TypeOrmModule,
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule],
})
class TypeOrmOptions implements TypeOrmOptionsFactory {
  //TODO: If this @Inject gets removed, logger will be undefined (???)
  constructor(
    private readonly config: ConfigService<MainDatabaseConfiguration>,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return dataSourceOptions;
  }
}

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: TypeOrmOptions,
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
