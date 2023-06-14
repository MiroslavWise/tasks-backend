import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Calls } from './calls.schema';
import { Model } from 'mongoose';
import { CallDto, CreateCallsDto } from './calls.dto';
import { type UUID } from 'crypto';
import { moveElement, insertElement, removeElement } from 'src/functions/move-element';
const { v4: uuidv4 } = require('uuid')

@Injectable()
export class CallsService {
        constructor(
                @InjectModel(Calls.name) private ColumnModel: Model<Calls>,
        ) { }
        //Get
        async getAllCalls(): Promise<Calls[]> {

                return this.ColumnModel.find().exec()
        }
        //Get
        async getAllTaskInCall(uuid: UUID): Promise<Calls> {
                return this.ColumnModel.findOne({ uuid: uuid }).exec()
        }
        //Post
        async create(data: CreateCallsDto) {
                const uuid = uuidv4()

                const dataCreate: CallDto = {
                        uuid: uuid,
                        label: data.label,
                        content: [],
                }
                const call = new this.ColumnModel(dataCreate)
                return call.save()
        }
        //Post
        async newTask(uuid: UUID, uuid_task: UUID) {
                const call = await this.ColumnModel.findOne({ uuid: uuid })

                if (!call) {
                        throw new Error('Call not found');
                }

                call.content.push(uuid_task)
                return await call.save()
        }
        //Put
        async moveTaskInSingleColumn(uuid: UUID, data: IDataMoveInSingleColumn) {
                const call = await this.ColumnModel.findOne({ uuid: uuid })

                if (!call) {
                        throw new Error('Call not found');
                }

                const arrayNewTask = moveElement(call.content, data.from_index, data.to_index)

                call.content = arrayNewTask

                return await call.save()
        }

        //Put
        async moveTaskBetweenColumns(data: IDataMoveTaskBetweenColumns) {
                
        }
}

export interface IDataMoveInSingleColumn{
        from_index: number
        to_index: number
}

export interface IDataMoveTaskBetweenColumns{
        from_column: UUID
        from_index: number
        to_column: UUID
        to_index: number
}