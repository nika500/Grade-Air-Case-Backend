import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from 'src/graphql';
import { UserCreateInput } from './dto/create-user.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  create(
    @Args('createUserInput') createUserInput: UserCreateInput,
  ): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  @Query('users')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number): Promise<User> {
    return this.usersService.findOne({ id });
  }

  @Mutation('updateUser')
  update(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update(updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number): Promise<User> {
    return this.usersService.remove({ id });
  }
}
