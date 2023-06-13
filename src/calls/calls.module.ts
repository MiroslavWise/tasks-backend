import { Module } from '@nestjs/common';
import { CallsService } from './calls.service';
import { CallsController } from './calls.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CallsSchema } from './calls.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'calls',
        schema: CallsSchema,
      },
    ]),
    DatabaseModule,
  ],
  providers: [CallsService],
  controllers: [CallsController]
})
export class CallsModule {}
