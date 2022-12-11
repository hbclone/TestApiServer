import { ForbiddenException } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { GetAllUserDto } from './Dto/get-All-User.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
