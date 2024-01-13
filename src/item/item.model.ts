import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.model';

@ObjectType()
export class Item {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  receivedAt: Date;

  @Field(() => User)
  user: User;
}
