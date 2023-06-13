import { Module } from '@nestjs/common';
import { ExecutorsService } from './executors.service';
import { ExecutorsController } from './executors.controller';
import { ExecutorsSchema } from './executors.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'executors',
        schema: ExecutorsSchema,
      },
    ]),
    DatabaseModule,
  ],
  providers: [ExecutorsService],
  controllers: [ExecutorsController]
})
export class ExecutorsModule { }
