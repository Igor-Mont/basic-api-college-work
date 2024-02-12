import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

import { ConflictExceptionResponse } from 'src/http/exceptions/conflict.exception';
import { NotFoundExceptionResponse } from 'src/http/exceptions/not-found.exception';
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

  @ApiTags('Users')
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

  @ApiTags('Users')
  @ApiOperation({ summary: 'Buscar usuário através do ID.' })
  @ApiOkResponse({
    description: 'Operação realizada com sucesso.',
    type: User,
  })
  @ApiNotFoundResponse({
    description: 'Registro não encontrado.',
    type: NotFoundExceptionResponse,
  })
  @Get(':id')
  findbyId(@Param('id') id: string) {
    return this.usersService.findById(id);
  }
}
