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

  /* get(id: any): Promise<T> {
    return this.repository.findById(id).populate(this._populateOnFind).exec();
  }

  create(item: Partial<T>): Promise<T> {
    return this.repository.create(item);
  } */

  async update(id: string | number, payload: Partial<T>) {
    const item = await this.repository.findOne(id);
    if (!item) {
      console.log("Error not implemented yet :') ");
    }

    return this.repository.manager.save(
      Object.assign(new this.objectType(), item, payload),
    );
  }
}
