import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Req() request: Request) {
    const { email, password } = request.body;

    return this.authService.login(email, password);
  }
}
