import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CallsController, ExecutorsController, TasksController } from './database.controller';
import { ExecutorsSchema } from '../executors/executors.schema';

@Module({
        imports: [

        ],
        exports: [MongooseModule]
})
export class DatabaseModule {}
