import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { userRepository } from './user.repository';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(User)
    private userRepository: userRepository,
  ) {}

  findAll(): Promise<User[]> {
    try {
      return this.userRepository.find();
    } catch (e) {
      throw e;
    }
  }
}
