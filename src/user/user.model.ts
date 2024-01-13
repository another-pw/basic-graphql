import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Item } from 'src/item/item.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Item], { nullable: 'items' })
  items: Item[];
}
