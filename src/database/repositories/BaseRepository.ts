import { Repository } from 'typeorm';
import { IRepository } from './IRepository';

export class BaseRepository<T> implements IRepository<T> {
  private repository: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.repository = entity;
  }

  getAll(): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: number | string): Promise<T> {
    return this.repository.findOneOrFail(id);
  }

  async insert(payload: T): Promise<T> {
    payload as T;
    return this.repository.manager.save(payload);
  }

  async update(id: string | number, payload: T) {
    const item = await this.repository.findOne(id);
    if (!item) {
      console.log("Error not implemented yet :') ");
    }

    return this.repository.update(item, payload);
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
