import { Injectable } from '@nestjs/common';
import {
  ForbiddenException,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { hashPassword } from 'src/util/bcypt';

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

  async createUser(
    email: string,
    name: string,
    password: string,
  ): Promise<boolean> {
    try {
      //이미 가입된 회원인지 확인
      let user = await this.userRepository.findOne({ where: { email } });

      if (user) {
        throw new UnauthorizedException('이미 존재하는 사용자입니다.');
      } else {
        const hashedPassword = await hashPassword(password);

        await this.userRepository.save({
          email,
          name,
          password: hashedPassword,
        });
        return true;
      }
    } catch (e) {
      console.log('e', e);
    }
  }
}
