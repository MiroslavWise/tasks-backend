import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksSchema } from './tasks.schema';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'executors',
        schema: TasksSchema,
      },
    ]),
    DatabaseModule,
  ],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
