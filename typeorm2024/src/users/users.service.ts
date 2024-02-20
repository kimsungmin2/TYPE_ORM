import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usersis } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usersis)
    private usersRepository: Repository<Usersis>,
  ) {}
  async create(createCatDto: CreateUserDto) {
    return await this.usersRepository.save(createCatDto);
  }
  async findAll() {
    return await this.usersRepository.find();
  }
  async findOne(userId: number) {
    return await this.usersRepository.findOne({ where: { userId } });
  }

  async update(userId: number, updateCatDto: UpdateUserDto) {
    const usersis = await this.findOne(userId);
    if (!usersis) {
      throw new Error('cat not found');
    }
    Object.assign(usersis, updateCatDto);
    return await this.usersRepository.save(usersis);
  }

  async remove(userId: number) {
    const usersis = await this.findOne(userId);
    if (!usersis) {
      throw new Error('cat not found');
    }
    return await this.usersRepository.remove(usersis);
  }
}
