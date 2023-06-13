import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class DatabaseConnection implements MongooseOptionsFactory {
        createMongooseOptions(): MongooseModuleOptions {
                return {
                        uri: process.env.MONGO_BD_HOST,
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                };
        }
}