import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CallsDocument = HydratedDocument<Calls>

@Schema()
export class Calls {
        @Prop({ required: true })
        uuid: string

        @Prop({ required: true })
        label: string

        @Prop([String])
        content: string[]
}

export const CallsSchema = SchemaFactory.createForClass(Calls)