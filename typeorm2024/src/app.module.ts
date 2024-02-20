import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormConfig } from '../orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ResumesModule } from './resumes/resumes.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    UsersModule,
    ResumesModule,
  ],
})
export class AppModule {}
