import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import config from './configuration/config';
import { repositoryCatalogFactory } from './database/repositories/RepositoryCatalogFactory';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    PlayersModule,
    CategoriesModule,
    ConfigModule.forRoot({
      load: [],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config().database.host,
      port: config().database.port,
      username: config().database.user,
      password: config().database.password,
      database: config().database.database,
      entities: ['./database/entities/*.ts'],
      autoLoadEntities: true,
      migrationsRun: true,
    }),
    CategoriesModule,
    PlayersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: 'REPOSITORY_CATALOG',
      useValue: () => repositoryCatalogFactory(),
    },
  ],
  exports: ['REPOSITORY_CATALOG'],
})
export class AppModule {}
