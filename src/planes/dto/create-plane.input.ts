import { IsAlpha } from 'class-validator';
import { Plane } from 'src/graphql';

export class CreatePlaneInput extends Plane {
  @IsAlpha()
  name: string;
}
