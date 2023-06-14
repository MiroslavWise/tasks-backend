import { Module } from '@nestjs/common';
import { ExecutorsService } from './executors.service';
import { ExecutorsController, ExecutorsControllerAll } from './executors.controller';
import { Executors, ExecutorsSchema } from './executors.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Executors.name,
        schema: ExecutorsSchema,
      },
    ])
  ],
  providers: [ExecutorsService],
  controllers: [ExecutorsController, ExecutorsControllerAll],
  exports: [ExecutorsService],
})
export class ExecutorsModule { }
