import { registerAs } from '@nestjs/config/dist';
import { EnumConfig } from '../enum/enumConfig';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import path from 'path';

export const pgConfig = registerAs(
  EnumConfig.DATABASE,
  (): PostgresConnectionOptions => ({
    type: process.env.TYPEORM_CONNECTION as 'postgres',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: +process.env.TYPEORM_PORT,
    entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  }),
);
