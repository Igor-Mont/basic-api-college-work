import { ApiProperty } from '@nestjs/swagger';

export class NotFoundExceptionResponse {
  @ApiProperty({
    example: 404,
    description: 'HTTP Status Code.',
  })
  statusCode: number;

  @ApiProperty({
    example: 'O registro não foi encontrado.',
  })
  message: string;

  @ApiProperty({
    example: 'Not found.',
    description: 'HTTP Error.',
  })
  error: string;
}
