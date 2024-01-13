import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateItemDto {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  receivedAt: Date;

  @Field(() => Int)
  userId: number;
}
