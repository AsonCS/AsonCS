export interface ExampleRepository {
  getById(id: string): Promise<{ id: string; name: string } | null>;
}
