import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CallsDocument = HydratedDocument<Calls>

@Schema()
export class Calls {
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

export const CallsSchema = SchemaFactory.createForClass(Calls)