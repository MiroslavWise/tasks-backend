import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MongooseModule.forRoot(`mongodb://localhost:27017/board`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'board',
}),
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'mongodb',
    //     host: 'localhost',
    //     port: 27017,
    //     database: 'board',
    //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //     synchronize: true,
    //   }),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
