import { getConnection } from 'typeorm';
import RepositoryCatalog from './RepositoryCatalog';

export default function repositoryCatalogFactory(): RepositoryCatalog {
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  return new RepositoryCatalog(queryRunner.manager);
}
