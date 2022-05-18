import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsAlpha, IsEmail, IsNumber, IsOptional } from 'class-validator';
import { User } from '../../graphql';

export class UpdateUserInput extends User {
  @IsNumber()
  id: number;

  @IsAlpha()
  @IsOptional()
  firstname: string;

  @IsAlpha()
  @IsOptional()
  lastname: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
