import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class DatabaseConnection implements MongooseOptionsFactory {
        createMongooseOptions(): MongooseModuleOptions {
                return {
                        uri: 'mongodb://localhost/board',
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                };
        }
}