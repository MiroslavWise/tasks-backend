import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseController } from './database.controller';
import { DatabaseConnection } from './database.connection';

@Module({
        imports: [
                MongooseModule.forRoot(`mongodb://localhost:27017/board`, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        connectionName: 'board',
                }),
                MongooseModule.forRootAsync({
                        useClass: DatabaseConnection,
                }),
        ],
        controllers: [DatabaseController],
        exports: [MongooseModule]
})
export class DatabaseModule {}
