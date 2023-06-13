import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TasksDocument = HydratedDocument<Tasks>

type IPriority = "low" | "medium" | "hight" | "no_priority" | "highest"

@Schema()
export class Tasks {
        @Prop({ required: true })
        uuid: string

        @Prop({ required: true })
        uuid_call: string

        @Prop({ required: true })
        title: string

        @Prop(raw({
                uuid: String,
                getFullNameRu: String,
        }))
        author: Record<string, string>

        @Prop()
        description: string

        @Prop()
        priority: IPriority

        @Prop()
        readiness: boolean

        @Prop([String])
        executors: string[]

        @Prop()
        dateExecution: string | null
}

export const TasksSchema = SchemaFactory.createForClass(Tasks)