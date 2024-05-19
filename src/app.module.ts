import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksGateway } from './tasks/tasks.gateway';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksGateway, TasksService],
})
export class AppModule {}
