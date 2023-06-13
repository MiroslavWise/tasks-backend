import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseController } from './database.controller';
import { ExecutorsSchema } from './schemas/executors.schema';

@Module({
        imports: [
                MongooseModule.forFeature([
                        {
                                name: 'executors',
                                schema: ExecutorsSchema,
                        },
                ]),
                MongooseModule.forRoot(`mongodb://localhost:27017/board`, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        connectionName: 'board',
                }),
        ],
        controllers: [DatabaseController],
})
export class DatabaseModule {}
