import { Module, forwardRef } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [forwardRef(() => ItemModule)],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
