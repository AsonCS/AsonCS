export interface ExampleEntity {
  id: string;
  name: string;
}

export class ExampleEntityImpl implements ExampleEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
  ) {}
}
