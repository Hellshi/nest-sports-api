import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import config from './configuration/config';
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
