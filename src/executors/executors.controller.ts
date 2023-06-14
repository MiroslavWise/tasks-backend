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
import { Executors } from './executors.schema';


@Controller('executor')
export class ExecutorsController {
        constructor(private readonly service: ExecutorsService) { }

        @Post('create')
        async create(@Body() create: ExecutorsDtoCreate) {
                return this.service.create(create)
        }

        @Put(':uuid')
        async setUpdatePerforming(@Param('uuid') uuid: string, @Body() data: { performing: boolean }): Promise<Executors> {
                return this.service.setUpdatePerforming(uuid, data)
        }

        @Delete(':uuid')
        async deleteExecutor(@Param('uuid') uuid: string): Promise<any>{
                return this.service.deleteExecutor(uuid)
        }
}

@Controller('executors')
export class ExecutorsControllerAll { 
        constructor(private readonly service: ExecutorsService) { }
        
        @Get()
        async getAll() {
                return this.service.getAllService()
        }
}