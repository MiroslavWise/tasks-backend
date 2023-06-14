import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator'
import { HydratedDocument } from 'mongoose';


type IPriority = "low" | "medium" | "hight" | "no_priority" | "highest"

@Schema()
export class Tasks {
        @Prop({ required: true, unique: true })
        @IsNotEmpty()
        uuid: string
        
        @Prop({ required: true })
        @IsNotEmpty()
        uuid_call: string
        
        @Prop({ required: true })
        @IsNotEmpty()
        title: string
        
        @Prop(raw({
                uuid: String,
                getFullNameRu: String,
        }))
        author: Record<string, string>
        
        @Prop({ default: "" })
        description?: string
        
        @Prop({ default: 'no_priority' })
        priority: IPriority
        
        @Prop({ default: undefined })
        readiness?: boolean | undefined
        
        @Prop([String])
        executors: string[]
        
        @Prop({ default: null })
        dateExecution: string | null
}

export type TasksDocument = HydratedDocument<Tasks>
export const TasksSchema = SchemaFactory.createForClass(Tasks)