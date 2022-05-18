import { IsAlpha, IsEmail, IsNumber, IsOptional } from 'class-validator';
import { UpdateUserInput } from '../../graphql';

export class UserUpdateInput extends UpdateUserInput {
  @IsNumber()
  id: number;

  @IsAlpha()
  @IsOptional()
  firstname?: string;

  @IsAlpha()
  @IsOptional()
  lastname?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
