import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create({ cpf, data_nascimento, nome }: CreateUserDto): User {
    const newUser = new User(cpf, nome, data_nascimento);
    this.users.push(newUser);
    return newUser;
  }
}
