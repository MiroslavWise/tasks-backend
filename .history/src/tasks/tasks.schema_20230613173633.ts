import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TasksDocument = HydratedDocument<Tasks>

@Schema()
export class Tasks {
        @Prop({ required: true })
        uuid: string

        @Prop({ required: true })
        uuid_call: string

        @Prop({ required: true })
        title: string
}

export const TasksSchema = SchemaFactory.createForClass(Tasks)