import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { ItemService } from './item.service';
import { Item } from './item.model';
import { CreateItemDto } from './dto/item.input';

@Resolver(() => Item)
export class ItemResolver {
  constructor(
    private userService: UserService,
    private itemService: ItemService,
  ) {}

  @Query(() => [Item])
  getAllItems() {
    return this.itemService.getAllItems();
  }

  @Mutation(() => Item)
  createItem(@Args('data') data: CreateItemDto) {
    return this.itemService.createItem(data);
  }

  @ResolveField()
  user(@Parent() item: Item) {
    const { id } = item;
    return this.userService.getUserByItemId(id);
  }
}
