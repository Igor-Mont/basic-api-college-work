import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'IsValidCPF', async: false })
export class IsValidCPF implements ValidatorConstraintInterface {
  validate(value: number): boolean | Promise<boolean> {
    return cpf.isValid(String(value).padStart(11, '0'));
  }

  defaultMessage(): string {
    return 'CPF inválido.';
  }
}
