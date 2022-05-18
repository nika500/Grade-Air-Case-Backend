import { IsAlpha, IsEmail, IsOptional, Length } from 'class-validator';
import { CreateUserInput } from '../../graphql';

export class UserCreateInput extends CreateUserInput {
  @Length(3, 20)
  username: string;

  @IsAlpha()
  firstname: string;

  @IsAlpha()
  lastname: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
