import { CreatePlaneInput } from './create-plane.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePlaneInput extends PartialType(CreatePlaneInput) {
  id: number;
}
