import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions = ():
    | TypeOrmModuleOptions
    | Promise<TypeOrmModuleOptions> => ({
    type: this.configService.get<any>('TYPEORM_CONNECTION'),
    host: this.configService.get<string>('TYPEORM_HOST'),
    username: this.configService.get<string>('TYPEORM_USERNAME'),
    password: this.configService.get<string>('TYPEORM_PASSWORD'),
    database: this.configService.get<string>('TYPEORM_DATABASE'),
    port: this.configService.get<number>('TYPEORM_PORT'),
    entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
  });
}
