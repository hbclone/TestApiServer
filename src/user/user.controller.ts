import { Controller, Get } from '@nestjs/common';
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
}
