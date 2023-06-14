import { Module } from '@nestjs/common';
import { CallsService } from './calls.service';
import { CallController, CallsController, MoveBetweenController, MoveSingleController } from './calls.controller';
import { Calls, CallsSchema } from './calls.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Calls.name,
        schema: CallsSchema,
      },
    ]),
  ],
  providers: [CallsService],
  controllers: [CallsController, CallController, MoveSingleController, MoveBetweenController],
  exports: [CallsService],
})
export class CallsModule {}
