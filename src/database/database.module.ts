import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { User, UserSchema } from 'src/schemas/user.schema';
import { Task, TaskSchema } from 'src/schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Task.name, schema: TaskSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
