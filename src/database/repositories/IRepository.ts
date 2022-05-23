export interface IRepository<T> {
  getAll(): Promise<T[]>;

  findById(id: number | string): Promise<T>;

  delete(id: number): Promise<T>;

  insert(item: Partial<T>): Promise<T>;

  update(id: number, item: Partial<T>);

  findBy<TValue>(key: keyof T, value: TValue): Promise<T | undefined>;
}
