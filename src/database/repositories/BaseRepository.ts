import { EntityManager, ObjectType, Repository } from 'typeorm';
import { IRepository } from './IRepository';

export class BaseRepository<T> implements IRepository<T> {
  protected entityManager: EntityManager;
  protected repository: Repository<T>;
  protected objectType: new () => T;

  constructor(entityManager: EntityManager, objectType: ObjectType<T>) {
    this.entityManager = entityManager;
    this.objectType = objectType as new () => T;
    this.repository = this.entityManager.getRepository<T>(objectType);
  }

  getAll(): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: number | string): Promise<T> {
    return this.repository.findOneOrFail(id);
  }

  async insert(payload: Partial<T>): Promise<T> {
    payload as T;
    return this.repository.manager.save(
      Object.assign(new this.objectType(), payload as T),
    );
  }

  async update(id: string | number, payload: Partial<T>) {
    const item = await this.repository.findOne(id);
    if (!item) {
      console.log("Error not implemented yet :') ");
    }

    return this.repository.manager.save(
      Object.assign(new this.objectType(), item, payload),
    );
  }

  async findBy<TValue>(key: keyof T, value: TValue): Promise<T | undefined> {
    return this.repository.findOne({
      where: {
        [key]: value,
      },
    });
  }

  async delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
