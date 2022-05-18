import { EntityManager, getConnection } from 'typeorm';
import IRepositoryCatalog from './IRepositoryCatalog';
import { IUserRepository } from './userRepository/IUserRepository';
import UserRepository from './userRepository/UserRepository';

export default class RepositoryCatalog implements IRepositoryCatalog {
  private entityManager: EntityManager;

  private cache: Map<string, any>;

  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
    this.cache = new Map<string, any>();
  }

  private refreshQueryRunner(): void {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    this.entityManager = queryRunner.manager;
  }

  private getRepo<TRepo>(name: string, factory: () => TRepo): TRepo {
    const cached = this.cache.get(name);

    if (cached && !this.entityManager.queryRunner?.isReleased) {
      return cached as TRepo;
    }

    if (!this.entityManager.queryRunner?.isTransactionActive)
      this.refreshQueryRunner();

    const repoInstance = factory();

    this.cache.set(name, repoInstance);

    return repoInstance;
  }

  async startTransaction(): Promise<void> {
    if (!this.entityManager?.queryRunner) {
      throw Error('Unable to start transaction!');
    }

    await this.entityManager.queryRunner.startTransaction();
  }

  async commit(): Promise<void> {
    await this.entityManager.queryRunner?.commitTransaction();
  }

  async rollback(): Promise<void> {
    await this.entityManager.queryRunner?.rollbackTransaction();
  }

  get user(): IUserRepository {
    return this.getRepo<IUserRepository>(
      'userRepo',
      () => new UserRepository(this.entityManager),
    );
  }
}
