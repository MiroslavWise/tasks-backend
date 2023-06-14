import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator'
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';

export type ExecutorsDocument = HydratedDocument<Executors>

@Schema()
export class Executors {
        @Prop({ required: true, unique: true })
        @IsNotEmpty()
        uuid: UUID

        @Prop()
        dateExecution: string | null

        @Prop({ type: Boolean, required: true })
        performing: boolean
        
        @Prop(raw({
                uuid: { type: String },
                getFullNameRu: { type: String },
        }))
        executor: Record<string, string>
}

export const ExecutorsSchema = SchemaFactory.createForClass(Executors)