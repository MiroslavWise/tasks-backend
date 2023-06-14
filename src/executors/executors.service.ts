import { Model } from 'mongoose';
import { Injectable, Global  } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { ExecutorsDtoCreate } from './executors.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Executors } from './executors.schema';
import * as dayjs from 'dayjs';

@Injectable()
@Global()
export class ExecutorsService {
        constructor(@InjectModel(Executors.name) private ExecutorModel: Model<Executors>) { }
        async create(createExecutorDto: ExecutorsDtoCreate): Promise<Executors> {
                try {
                        const createdExecutor = new this.ExecutorModel(createExecutorDto)
                        return createdExecutor.save()
                } catch (e) {
                        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
                }
        }

        async setUpdatePerforming(uuid: string, data: { performing: boolean }): Promise<Executors> {
                const currentDate = dayjs().format('YYYY-MM-DDTHH:mm');

                return this.ExecutorModel.findOneAndUpdate({ uuid: uuid }, { performing: data.performing, dateExecution: data.performing ? currentDate : null }, { new: true }).exec()
        }

        async deleteExecutor(uuid: string): Promise<any> {
                return this.ExecutorModel.findOneAndDelete({ uuid: uuid }).exec()
        }

        async getAllService(): Promise<Executors[]> {
                return this.ExecutorModel.find().exec()
        }
}
