import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { userRepository } from './user.repository';
import { userService } from './user.Service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [userService],
  exports: [TypeOrmModule.forFeature()],
})
export class UserModule {}
