import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false, index: true }) //Optional field to help know if a task is completed; #Possible implementations
  completed: boolean;

  @Prop()
  dateCompleted: Date; //Optional field to help know when a task is completed; #Possible implementations

  @Prop({ index: true, type: String, ref: 'User' })
  user: MongooseSchema.Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
