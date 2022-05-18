import { IsAlpha } from 'class-validator';
import { Plane } from '../../graphql';

export class CreatePlaneInput extends Plane {
  @IsAlpha()
  name: string;
}
