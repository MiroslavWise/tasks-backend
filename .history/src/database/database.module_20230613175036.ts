import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseController } from './database.controller';
import { DatabaseConnection } from './database.connection';

@Module({
        imports: [
                MongooseModule.forRootAsync({
                        useClass: DatabaseConnection,
                }),
        ],
        controllers: [DatabaseController],
        exports: [MongooseModule]
})
export class DatabaseModule {}
