import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseController } from './database.controller';

@Module({
        imports: [
                
        ],
        controllers: [DatabaseController],
})
export class DatabaseModule {}
