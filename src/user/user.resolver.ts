import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { ItemService } from 'src/item/item.service';
import { User } from './user.model';
import { CreateUserDto } from './dto/user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private itemService: ItemService,
  ) {}

  @Query(() => [User])
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  createUser(@Args('data') data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @ResolveField()
  items(@Parent() user: User) {
    const { id } = user;
    return this.itemService.getItemsByUserId(id);
  }
}
