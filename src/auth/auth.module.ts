import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/user/user.controller';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { userService } from 'src/user/user.Service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [TypeOrmModule.forFeature()],
})
export class AuthModule {}
