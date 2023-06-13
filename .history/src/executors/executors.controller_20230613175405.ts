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

@Controller('executors')
export class ExecutorsController {
        constructor(private readonly service: ExecutorsService) {}
        
}
