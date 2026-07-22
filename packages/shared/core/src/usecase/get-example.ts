import type { ExampleRepository } from '../interfaces/example-repository';

export interface GetExampleInput {
  id: string;
}

export interface GetExampleOutput {
  id: string;
  name: string;
}

export class GetExampleUseCase {
  constructor(private readonly repository: ExampleRepository) {}

  async execute(input: GetExampleInput): Promise<GetExampleOutput | null> {
    return this.repository.getById(input.id);
  }
}
