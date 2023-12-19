import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  Length,
  Matches,
  Validate,
} from 'class-validator';
import { IsValidCPF } from '../validators/valid-cpf-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'O CPF do usuário não pode ser vazio.',
  })
  @IsNumber(
    {},
    {
      message: 'O CPF do usuário deve ser um número.',
    },
  )
  @Validate(IsValidCPF, {
    message: 'O CPF do usuário é inválido.',
  })
  cpf: number;

  @IsNotEmpty({
    message: 'O nome do usuário não pode ser vazio.',
  })
  @Length(3, 50, {
    message: 'O nome do usuário deve ter entre 3 e 50 caracteres',
  })
  @Matches(/[^\s]/, {
    message: 'O nome do usuário não pode consistir apenas em espaços em branco',
  })
  nome: string;

  @IsNotEmpty({
    message: 'A data de nascimento do usuário não pode ser vazia.',
  })
  @IsDateString(
    {
      strict: true,
    },
    {
      message:
        'A data de nascimento do usuário deve ser uma instância de data válida.',
    },
  )
  data_nascimento: Date;
}
