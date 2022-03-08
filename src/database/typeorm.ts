import config from './../configuration/config';

export default {
  type: 'mysql',
  host: config().database.host,
  port: config().database.port,
  username: config().database.user,
  password: config().database.password,
  database: config().database.database,
  entities: ['src/database/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
