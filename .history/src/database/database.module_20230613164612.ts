import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseController } from './database.controller';

@Module({
        imports: [
                MongooseModule.forRoot(`mongodb://localhost:27017/board`, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                }),
        ],
        controllers: [DatabaseController],
})
export class DatabaseModule {}
