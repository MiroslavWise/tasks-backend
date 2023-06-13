import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExecutorsDocument = HydratedDocument<Executors>

@Schema()
export class Executors{
        @Prop(String)
        uuid: string

        @Prop(String || null)
        dateExecution: string | null

        @Prop()
        performing: boolean
                
        // @Prop()
}

export const ExecutorsSchema= SchemaFactory.createForClass(Executors)