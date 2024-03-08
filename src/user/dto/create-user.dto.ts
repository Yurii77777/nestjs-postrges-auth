import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(2, { message: 'Too short full name, must be more than 2 chars!' })
  fullName: string;

  @IsEmail({}, { message: 'Invalid email format!' })
  email: string;

  @MinLength(3, { message: 'Password must be more than 2 chars!' })
  @MaxLength(30, { message: 'Password must be less than 30 chars!' })
  @Matches(/^(?=.*[A-ZА-ЯЁ])(?=.*[!@#$&*]).*$/, {
    message:
      'Password must contain at least one uppercase letter, and one special symbol!',
  })
  password: string;
}
