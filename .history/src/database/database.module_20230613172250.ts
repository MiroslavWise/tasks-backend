import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CallsController, ExecutorsController, TasksController } from './database.controller';
import { ExecutorsSchema } from './schemas/executors.schema';

@Module({
        imports: [
                MongooseModule.forFeature([
                        {
                                name: 'executors',
                                schema: ExecutorsSchema,
                        },
                ]),
        ],
        controllers: [ExecutorsController, TasksController, CallsController],
})
export class DatabaseModule {}
