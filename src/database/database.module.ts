import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
