import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { readFileSync } from 'fs';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

const rootCert = readFileSync(
  join(__dirname, '/certificates/us-east-2-bundle.pem'),
);

const options: DataSourceOptions & { ssl?: any } = {
  type: 'postgres',
  url: process.env.MAIN_DATABASE_CONNECTION_STRING,
  entities: [],
  synchronize: process.env.MAIN_DATABASE_AUTOLOAD === 'true',
  migrationsRun: process.env.MAIN_DATABASE_AUTOLOAD === 'true',
  logging: true,
  migrations: [__dirname + '/src/migration/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  namingStrategy: new SnakeNamingStrategy(),
};

if (process.env.MAIN_DATABASE_SSL_ALLOWED === 'true') {
  options.ssl = { rejectUnauthorized: true, ca: rootCert };
}

export const dataSourceOptions = options;

export const dataSource = new DataSource(options);
