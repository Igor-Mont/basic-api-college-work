import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create({ cpf, data_nascimento, nome }: CreateUserDto): User {
    if (this.findByCPF(cpf))
      throw new HttpException('CPF já cadastrado.', HttpStatus.CONFLICT);

    const newUser = new User(cpf, nome, data_nascimento);
    this.users.push(newUser);
    return newUser;
  }

  findByCPF(cpf: number): User | undefined {
    return this.users.find((user) => user.cpf === cpf);
  }
}
