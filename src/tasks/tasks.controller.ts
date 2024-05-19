import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('tasks')
@ApiBearerAuth('access-token')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@Req() req, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto, req.user.userId);
  }
}
