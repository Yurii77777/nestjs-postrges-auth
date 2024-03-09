import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { UserService } from 'src/user/user.service';

import { IUser } from 'src/types/common.types';

import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const isMatchPassword = await argon2.verify(user.password, password);

    if (user && isMatchPassword) {
      return user;
    }

    throw new UnauthorizedException('Incorrect password or email!');
  }

  async login(user: IUser) {
    const { id, email } = user;

    return {
      token: this.jwtService.sign({ id, email }),
    };
  }

  async create(createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }
}
