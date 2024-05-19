import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Task, TaskDocument } from 'src/schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto, user: ObjectId): Promise<Task> {
    console.log(createTaskDto, 'createTaskDto__')
    const createdTask = new this.taskModel({ ...createTaskDto, user });
    return createdTask.save();
  }
}
