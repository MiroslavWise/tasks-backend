import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator'
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CallsDocument = HydratedDocument<Calls>

@Schema()
export class Calls {
        @Prop({ required: true, unique: true, default: uuidv4 })
        uuid: UUID

        @Prop({ required: true })
        @IsNotEmpty()
        label: string

        @Prop([String])
        content: string[]
}

export const CallsSchema = SchemaFactory.createForClass(Calls)