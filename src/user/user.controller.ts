import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { GetAllUserDto } from './Dto/get-All-User.dto';
import { User } from './user.entity';
import { userService } from './user.Service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: userService) {}

  @Get()
  async GetAllUser(): Promise<GetAllUserDto[]> {
    return await this.userService.findAll();
  }

  @Post('/validate')
  async findUser(@Req() request: Request) {
    const { email } = request.body;
    return await this.userService.ValidateEmail(email);
  }

  @Post('/join')
  async createUser(@Req() request: Request) {
    const { email, name, password } = request.body;
    return await this.userService.createUser(email, name, password);
  }
}
