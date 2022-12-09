import { ForbiddenException } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { GetAllUserDto } from './Dto/get-All-User.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findOneByEmail(email: string) {
    try {
      const user = await this.findOne({
        where: { email: email },
      });
      return user;
    } catch (e) {
      console.log('e', e);
      throw new ForbiddenException();
    }
  }
}
