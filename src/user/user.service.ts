import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class userService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    try {
      return this.userRepository.find();
    } catch (e) {
      throw new ForbiddenException();
    }
  }

  // 로그인시 유저 이메일 검즘
  async ValidateEmail(email: string): Promise<boolean> {
    try {
      let user = this.userRepository.findOne({ where: { email } });

      if (user) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      throw new ForbiddenException();
    }
  }
}
