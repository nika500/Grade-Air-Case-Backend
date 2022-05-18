import { IsAlpha, IsEmail, IsOptional, Length } from 'class-validator';
import { User } from 'src/graphql';

export class CreateUserInput extends User {
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
