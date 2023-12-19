import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'node:crypto';

@ApiTags('users')
export class User {
  @ApiProperty({ example: '9539faac-c39a-4470-97d5-25dceb52f8bb' })
  readonly id: string;

  @ApiProperty({ example: 1174571080 })
  readonly cpf: number;

  @ApiProperty({ example: 'Igor Nathan Monteiro Santos' })
  readonly nome: string;

  @ApiProperty({ example: '2023-12-19T10:59:56Z' })
  readonly data_nascimento: Date;

  constructor(cpf: number, nome: string, data_nascimento: Date, _id?: string) {
    this.id = _id ?? randomUUID();
    this.cpf = cpf;
    this.nome = nome;
    this.data_nascimento = data_nascimento;
  }
}
