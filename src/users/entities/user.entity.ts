import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;

  constructor(
    public cpf: number,
    public nome: string,
    public data_nascimento: Date,
    _id?: string,
  ) {
    this.id = _id ?? randomUUID();
  }
}
