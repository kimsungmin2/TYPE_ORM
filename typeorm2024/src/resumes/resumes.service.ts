import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resumes } from '../entities/Resume.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ResumesService {
  constructor(
    @InjectRepository(Resumes)
    private usersRepository: Repository<Resumes>,
  ) {}
  async create(createResumeDto: CreateResumeDto) {
    return await this.usersRepository.save(createResumeDto);
  }
  async findAll() {
    return await this.usersRepository.find();
  }
  async findOne(resumeId: number) {
    return await this.usersRepository.findOne({ where: { resumeId } });
  }

  async update(resumeId: number, updateCatDto: UpdateResumeDto) {
    const Resume = await this.findOne(resumeId);
    if (!Resume) {
      throw new Error('cat not found');
    }
    Object.assign(Resume, updateCatDto);
    return await this.usersRepository.save(Resume);
  }

  async remove(resumeId: number) {
    const Resumesis = await this.findOne(resumeId);
    if (!Resumesis) {
      throw new Error('cat not found');
    }
    return await this.usersRepository.remove(Resumesis);
  }
}
