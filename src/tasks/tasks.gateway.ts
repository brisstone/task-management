import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ObjectId } from 'mongoose';
import { Server } from 'socket.io';

@WebSocketGateway()
export class TasksGateway {
  @WebSocketServer()
  server: Server;

  emitTaskCreated(task: any) {
    this.server.emit('taskCreated', task);
  }

  emitTaskUpdated(task: any) {
    this.server.emit('taskUpdated', task);
  }

  emitTaskDeleted(taskId: ObjectId) {
    this.server.emit('taskDeleted', taskId);
  }
}
