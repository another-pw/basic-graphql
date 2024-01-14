import { Module, forwardRef } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [ItemResolver, ItemService],
  exports: [ItemService],
})
export class ItemModule {}
