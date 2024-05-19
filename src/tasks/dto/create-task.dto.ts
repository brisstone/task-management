import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'The title of the task' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'The description of the task' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
