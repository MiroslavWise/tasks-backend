import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CallsController, ExecutorsController, TasksController } from './database.controller';
import { ExecutorsSchema } from '../executors/executors.schema';

@Module({
        imports: [
                MongooseModule.forRoot(`mongodb://localhost:27017/board`, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        connectionName: 'board',
                }),
        ],
        exports: [MongooseModule]
})
export class DatabaseModule {}
