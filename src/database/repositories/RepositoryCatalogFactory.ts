import { getConnection } from 'typeorm';
import RepositoryCatalog from './RepositoryCatalog';

export function repositoryCatalogFactory(): RepositoryCatalog {
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  return new RepositoryCatalog(queryRunner.manager);
}

export const repositoryCatalogProvider = {
  provide: 'BaseRepository',
  useValue: repositoryCatalogFactory(),
};
