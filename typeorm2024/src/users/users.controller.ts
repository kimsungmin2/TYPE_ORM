import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':userid')
  findOne(@Param('userid') userid: string) {
    return this.usersService.findOne(+userid);
  }

  @Patch(':userid')
  update(
    @Param('userid') userid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+userid, updateUserDto);
  }

  @Delete(':userid')
  remove(@Param('userid') userid: string) {
    return this.usersService.remove(+userid);
  }
}
