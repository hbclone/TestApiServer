import { IsNumber, IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
