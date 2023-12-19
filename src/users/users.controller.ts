import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBody,
  ApiConflictResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

import { ConflictExceptionResponse } from 'src/http/exceptions/conflict.exception';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiTags('Users')
  @ApiOperation({ summary: 'Criar um novo usuário.' })
  @ApiBody({
    type: CreateUserDto,
    description: 'Dados do usuário a ser criado.',
  })
  @ApiOkResponse({
    description: 'O usuário foi criado com sucesso.',
    type: User,
  })
  @ApiConflictResponse({
    description: 'Registro já existe.',
    type: ConflictExceptionResponse,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }

  @ApiTags('users')
  @ApiOperation({ summary: 'Listar todos os usuários.' })
  @ApiOkResponse({
    description: 'Operação realizada com sucesso.',
    type: User,
    isArray: true,
  })
  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }
}
