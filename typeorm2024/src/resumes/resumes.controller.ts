import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) {}

  @Post()
  create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumesService.create(createResumeDto);
  }

  @Get()
  findAll() {
    return this.resumesService.findAll();
  }

  @Get(':resumeId')
  findOne(@Param('resumeId') resumeId: string) {
    return this.resumesService.findOne(+resumeId);
  }

  @Patch(':resumeId')
  update(
    @Param('resumeId') resumeId: string,
    @Body() updateResumeDto: UpdateResumeDto,
  ) {
    return this.resumesService.update(+resumeId, updateResumeDto);
  }

  @Delete(':resumeId')
  remove(@Param('resumeId') resumeId: string) {
    return this.resumesService.remove(+resumeId);
  }
}
