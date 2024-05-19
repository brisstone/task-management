import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'john_doe',
  })
  readonly username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'strongPassword123',
  })
  readonly password: string;
}
