import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';

import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (existUser) {
      throw new BadRequestException('Email has been used!');
    }

    const user = await this.userRepository.save({
      fullName: createUserDto.fullName,
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
    });

    return { email: user.email };
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
}
