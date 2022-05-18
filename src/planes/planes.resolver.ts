import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlanesService } from './planes.service';
import { CreatePlaneInput } from './dto/create-plane.input';
import { UpdatePlaneInput } from './dto/update-plane.input';
import { Plane } from 'src/graphql';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver('Plane')
export class PlanesResolver {
  constructor(private readonly planesService: PlanesService) {}

  @Mutation('createPlane')
  create(
    @Args('createPlaneInput') createPlaneInput: CreatePlaneInput,
  ): Promise<Plane> {
    return this.planesService.create(createPlaneInput);
  }

  @Query('planes')
  findAll(): Promise<Plane[]> {
    return this.planesService.findAll();
  }

  @Query('plane')
  findOne(@Args('id') id: number): Promise<Plane> {
    return this.planesService.findOne({ id });
  }

  @Mutation('updatePlane')
  update(
    @Args('updatePlaneInput') updatePlaneInput: UpdatePlaneInput,
  ): Promise<Plane> {
    return this.planesService.update(updatePlaneInput);
  }

  @Mutation('removePlane')
  remove(@Args('id') id: number): Promise<Plane> {
    return this.planesService.remove({ id });
  }
}
