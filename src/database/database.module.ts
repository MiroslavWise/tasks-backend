import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseController } from './database.controller';
import { DatabaseConnection } from './database.connection';
import { DatabaseService } from './database.service';
import { CallsModule } from 'src/calls/calls.module';
import { ExecutorsModule } from 'src/executors/executors.module';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
        imports: [
                MongooseModule.forRootAsync({
                        useClass: DatabaseConnection,
                }),
                CallsModule,
                TasksModule,
                ExecutorsModule,
        ],
        controllers: [DatabaseController],
        providers: [DatabaseService],
        exports: [MongooseModule, DatabaseModule]
})
export class DatabaseModule {}
