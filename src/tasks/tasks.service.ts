import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Task, TaskDocument } from 'src/schemas/task.schema';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';
import { TasksGateway } from './tasks.gateway';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    private readonly tasksGateway: TasksGateway,
  ) {}

  async create(createTaskDto: CreateTaskDto, user: ObjectId): Promise<Task> {
    const createdTask = new this.taskModel({ ...createTaskDto, user });
    this.tasksGateway.emitTaskCreated(createdTask);
    return createdTask.save();
  }

  async findTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findTask(id: ObjectId): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const existingTask = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true })
      .exec();
    if (!existingTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    this.tasksGateway.emitTaskUpdated(existingTask);
    return existingTask;
  }

  async deleteTask(id: ObjectId): Promise<Task> {
    const task = await this.taskModel.findByIdAndDelete(id).exec();
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    this.tasksGateway.emitTaskDeleted(id);
    return task;
  }
}
