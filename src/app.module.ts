import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './Authentication/google.strategy';
import { TodoModule } from './todo/todo.module';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [ 
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadModels: true,
    synchronize: true,
  }),
  TodoModule
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
