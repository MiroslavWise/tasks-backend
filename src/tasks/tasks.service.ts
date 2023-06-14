import { Injectable, Global  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tasks } from './tasks.schema';
import { TasksDto } from './tasks.dto';

@Injectable()
@Global()
export class TasksService {
        constructor(
                @InjectModel(Tasks.name) private TaskModel: Model<Tasks>,
        ) { }

        async getAllTasks():Promise<Tasks[]> {
                return this.TaskModel.find().exec()
        }

        async getTasksInCall(uuid_call: string): Promise<Tasks>{

                return this.TaskModel.findOne({uuid_call: uuid_call})
        }

        async createNewTasks(data: TasksDto) {
                const create = new this.TaskModel(data)
                return await create.save()
        }

        async update(uuid: string, data: TasksDto) {
                return await this.TaskModel.findOneAndUpdate({ uuid: uuid }, data, { new: true }).exec()
        }

        async deleteTask(uuid: string) {
                return this.TaskModel.deleteOne({uuid: uuid})
        }

        async findTask(uuid: string) {
                return this.TaskModel.findOne({ uuid: uuid }).exec()
        }
}