import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { IsValidCPF } from './validators/valid-cpf-validator';

@Module({
  controllers: [UsersController],
  providers: [UsersService, IsValidCPF],
})
export class UsersModule {}
