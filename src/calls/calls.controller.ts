import {
        Body,
        Delete,
        Get,
        Param,
        Post,
        Put,
        Controller,
} from '@nestjs/common';
import { CallsService, IDataMoveInSingleColumn, IDataMoveTaskBetweenColumns } from './calls.service';
import { CreateCallsDto } from './calls.dto';
import { UUID } from 'crypto';
import { Calls } from './calls.schema';

@Controller('column')
export class CallController {
        constructor(
                private readonly callService: CallsService,
        ) { }
        //Создание колонки
        @Post()
        async create(@Body() data: CreateCallsDto) {
                return this.callService.create(data)
        }
        //Получение задач в заданной колонке
        @Get(':uuid')
        async getAllTaskInCall(@Param('uuid') uuid: UUID): Promise<Calls> {
                return this.callService.getAllTaskInCall(uuid)
        }
}

@Controller('column-move-single')
export class MoveSingleController { 
        constructor(
                private readonly callService: CallsService,
        ) { }
        //Перемещение задачи в одной колонке
        @Put(':uuid')
        async moveTaskInSingleColumn(
                @Param('uuid') uuid: UUID,
                @Body() data: IDataMoveInSingleColumn
        ) {
                return await this.callService.moveTaskInSingleColumn(uuid, data)
        }
}

@Controller('column-move-between')
export class MoveBetweenController { 
        constructor(
                private readonly callService: CallsService,
        ) { }
        //Перемезщение задач между колонками
        @Put()
        async moveTaskBetweenColumns(
                @Body() data: IDataMoveTaskBetweenColumns
        ) {
                return await this.callService.moveTaskBetweenColumns(data)
        }

}

@Controller('columns')
export class CallsController {
        constructor(
                private readonly callService: CallsService,
        ) { }
        //Получение всех колонок
        @Get()
        async getAll() {
                return this.callService.getAllCalls()
        }
}

