import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {}

  async login(email: string, password: string) {
    try {
      const isEmail = await this.userRepo.findOne({
        where: { email: email },
      });

      if (isEmail) {
        const payload = { email: email, sub: '0' };
        return this.jwtService.sign(payload);
      }

      throw new UnauthorizedException('인증되지 않은 사용자입니다');
    } catch (e) {
      console.log('e', e);
    }
  }
}
