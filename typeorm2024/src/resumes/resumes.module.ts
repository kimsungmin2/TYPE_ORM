import { Module } from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { ResumesController } from './resumes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resumes } from '../entities/Resume.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resumes])],
  controllers: [ResumesController],
  providers: [ResumesService],
})
export class ResumesModule {}
