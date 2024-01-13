import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [ItemModule],
  providers: [UserResolver, UserService],
})
export class UserModule {}
