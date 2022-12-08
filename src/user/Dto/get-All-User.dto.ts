import { IsNumber, IsString } from 'class-validator';

export class GetAllUserDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;
}
