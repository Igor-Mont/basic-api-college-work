import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ConflictExceptionResponse {
  @ApiProperty({
    example: 409,
    description: 'HTTP Status code',
  })
  statusCode: number;
  @ApiProperty({
    example: 'O registro já existe.',
  })
  message: string;
}

export class ConflictException extends HttpException {
  constructor() {
    super('Conflict', HttpStatus.CONFLICT);
  }
}
