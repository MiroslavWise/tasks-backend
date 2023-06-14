import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskController, TasksController, TasksInCallController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tasks, TasksSchema } from './tasks.schema';
import { ExecutorsModule } from 'src/executors/executors.module';
import { CallsModule } from 'src/calls/calls.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tasks.name,
        schema: TasksSchema,
      },
    ]),
    ExecutorsModule,
    CallsModule,
  ],
  providers: [TasksService],
  controllers: [TasksController, TaskController, TasksInCallController],
  exports: [TasksService],
})
export class TasksModule {}