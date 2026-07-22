import type { ExampleRepository } from '../interfaces/example-repository';

export class InMemoryExampleRepository implements ExampleRepository {
  private readonly items = new Map<string, { id: string; name: string }>([
    ['1', { id: '1', name: 'Example item' }],
  ]);

  async getById(id: string) {
    return this.items.get(id) ?? null;
  }
}
