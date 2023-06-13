import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TasksDocument = HydratedDocument<Tasks>

@Schema()
export class Tasks {
        @Prop({ required: true })
        uuid: string

        @Prop()
        dateExecution: string | null

        @Prop()
        performing: boolean
        
        @Prop(raw({
                uuid: { type: String },
                getFullNameRu: { type: String },
        }))
        executor: Record<string, string>
}

export const TasksSchema = SchemaFactory.createForClass(Tasks)