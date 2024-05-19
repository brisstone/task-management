import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-users.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully registered.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(
      createUserDto.username,
      createUserDto.password,
    );
  }
}
