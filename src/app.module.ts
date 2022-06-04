import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import config from './configuration/config';
import { PlayersModule } from './players/players.module';
import { ChallengesModule } from './challenges/challenges.module';
import { MatchesModule } from './matches/matches.module';
import { SetResultsModule } from './set-results/set-results.module';

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
    ChallengesModule,
    MatchesModule,
    SetResultsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
