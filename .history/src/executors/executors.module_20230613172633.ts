import { Module } from '@nestjs/common';
import { ExecutorsService } from './executors.service';

@Module({
  providers: [ExecutorsService]
})
export class ExecutorsModule {}
