import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlanesService } from './planes.service';
import { CreatePlaneInput } from './dto/create-plane.input';
import { UpdatePlaneInput } from './dto/update-plane.input';

@Resolver('Plane')
export class PlanesResolver {
  constructor(private readonly planesService: PlanesService) {}

  @Mutation('createPlane')
  create(@Args('createPlaneInput') createPlaneInput: CreatePlaneInput) {
    return this.planesService.create(createPlaneInput);
  }

  @Query('planes')
  findAll() {
    return this.planesService.findAll();
  }

  @Query('plane')
  findOne(@Args('id') id: number) {
    return this.planesService.findOne(id);
  }

  @Mutation('updatePlane')
  update(@Args('updatePlaneInput') updatePlaneInput: UpdatePlaneInput) {
    return this.planesService.update(updatePlaneInput.id, updatePlaneInput);
  }

  @Mutation('removePlane')
  remove(@Args('id') id: number) {
    return this.planesService.remove(id);
  }
}
