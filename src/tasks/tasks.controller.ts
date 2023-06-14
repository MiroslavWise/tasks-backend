import {
        Body,
        Delete,
        Get,
        Param,
        Post,
        Put,
        Controller,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.schema';
import { TasksDto, TasksDtoCreate } from './tasks.dto';
import { ExecutorsService } from 'src/executors/executors.service';
import { CallsService } from 'src/calls/calls.service';
import { type UUID } from 'crypto';
import { Calls } from 'src/calls/calls.schema';
import { CallMoreDto, CreateCallsDto } from 'src/calls/calls.dto';
const { v4: uuidv4 } = require('uuid')

@Controller('task')
export class TaskController {
        constructor(
                private readonly taskService: TasksService,
                private readonly executorService: ExecutorsService,
                private readonly callsService: CallsService,
        ) { }

        @Post('create')
        async newTask(@Body() data: TasksDtoCreate) {
                if (!data?.title || !data?.uuid_call || !data?.author) {
                        throw new Error('Не валидные поля!')
                }
                const executors: UUID[] = Array.isArray(data.executors) ? data.executors.map((item) => {
                        const uuid = uuidv4()
                        this.executorService.create({
                                uuid: uuid,
                                dateExecution: null,
                                performing: false,
                                executor: {
                                        uuid: item.uuid,
                                        getFullNameRu: item.getFullNameRu,
                                }
                        })
                        return uuid
                }) : []
                const uuid_tasks = uuidv4()
                const newData: TasksDto = {
                        uuid: uuid_tasks,
                        title: data.title,
                        uuid_call: data.uuid_call,
                        author: {
                                uuid: data.author.uuid,
                                getFullName: data.author.getFullName,
                        },
                        description: data.description || "",
                        priority: data.priority || "no_priority",
                        executors: executors,
                        dateExecution: data.dateExecution || null,
                }
                await this.callsService.newTask(data.uuid_call, uuid_tasks)
                return await this.taskService.createNewTasks(newData)
        }

        @Delete(':uuid')
        async deleteTask(@Param('uuid') uuid: string) {
                (await this.taskService.findTask(uuid))
                        .executors
                        .forEach(item => {
                                this.executorService.deleteExecutor(item)
                        })
                return this.taskService.deleteTask(uuid)
        }

        @Put(':uuid')
        async update(@Param('uuid') uuid: string, @Body() data: TasksDto) {
                if (data?.author || data?.uuid) return;
                return this.taskService.update(uuid, data)
        }
}
@Controller('tasks')
export class TasksController {
        constructor(private readonly service: TasksService) { }

        @Get()
        async getAll(): Promise<Tasks[]> {
                return await this.service.getAllTasks()
        }

        @Get(':uuid_call')
        async getTasksInCall(@Param(':uuid_call') uuid_call: UUID): Promise<Tasks> {
                return this.service.getTasksInCall(uuid_call)
        }
}

@Controller('tasks-in-call')
export class TasksInCallController{
        constructor(
                private readonly taskService: TasksService,
                private readonly executorService: ExecutorsService,
                private readonly callsService: CallsService,
        ) { }

        @Get(':uuid')
        async getTasksInCall(@Param('uuid') uuid: UUID) {
                // const callCurrent = (await this.callsService.getAllTaskInCall(uuid)).content.map(async (item) => {
                //         const task = (await this.taskService.findTask(item))
                //         console.log("task: ", task)
                //         return task
                // })

                return 'Вернуть таски'
                // return callCurrent
        }
}
