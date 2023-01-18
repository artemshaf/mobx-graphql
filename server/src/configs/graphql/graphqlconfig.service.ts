import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GraphQLConfigService
  implements GqlOptionsFactory<ApolloDriverConfig>
{
  constructor(private readonly configService: ConfigService) {}

  createGqlOptions = ():
    | Omit<ApolloDriverConfig, 'driver'>
    | Promise<Omit<ApolloDriverConfig, 'driver'>> => ({
    autoSchemaFile: 'schema.gql',
    sortSchema: true,
    playground: true,
  });
}
