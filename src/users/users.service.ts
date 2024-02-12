import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create({ cpf, data_nascimento, nome }: CreateUserDto): User {
    if (this.findByCPF(cpf)) throw new ConflictException('CPF já cadastrado.');

    const newUser = new User(cpf, nome, data_nascimento);
    this.users.push(newUser);
    return newUser;
  }

  findByCPF(cpf: number): User | undefined {
    return this.users.find((user) => user.cpf === cpf);
  }

  findAll(): User[] {
    return [...this.users];
  }

  findById(id: string): User {
    const user = this.users.find((user) => user.id === id);

    if (!user)
      throw new NotFoundException(
        'Usuário não está cadastrado na base de dados.',
      );

    return user;
  }
}
