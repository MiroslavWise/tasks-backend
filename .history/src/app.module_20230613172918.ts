import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ExecutorsController } from './executors/executors.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
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
  controllers: [AppController, ExecutorsController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
