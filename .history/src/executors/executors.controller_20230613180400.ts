import {
        Body,
        Delete,
        Get,
        Param,
        Post,
        Put,
        Controller,
} from '@nestjs/common';
import { ExecutorsService } from './executors.service';
import { ExecutorsDtoCreate } from './executors.dto';

@Controller('executors')
export class ExecutorsController {
        constructor(private readonly service: ExecutorsService) {}

        @Post()
        async create(@Body() create: ExecutorsDtoCreate) {
                return this.service.create()
        }
}
