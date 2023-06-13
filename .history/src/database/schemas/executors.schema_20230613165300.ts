import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExecutorsDocument = HydratedDocument<Executors>

@Schema()
export class Executors{

}

export const ExecutorsSchema= SchemaFactory.createForClass(Executors)