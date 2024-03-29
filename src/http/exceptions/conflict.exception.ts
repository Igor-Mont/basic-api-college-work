import { ApiProperty } from '@nestjs/swagger';

export class ConflictExceptionResponse {
  @ApiProperty({
    example: 409,
    description: 'HTTP Status Code.',
  })
  statusCode: number;

  @ApiProperty({
    example: 'O registro já existe.',
  })
  message: string;

  @ApiProperty({
    example: 'Conflict',
    description: 'HTTP Error.',
  })
  error: string;
}
