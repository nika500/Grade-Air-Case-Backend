import { IsAlpha, IsNumber, IsOptional } from 'class-validator';
import { Plane } from '../../graphql';

export class UpdatePlaneInput extends Plane {
  @IsNumber()
  id: number;

  @IsAlpha()
  @IsOptional()
  name: string;
}
