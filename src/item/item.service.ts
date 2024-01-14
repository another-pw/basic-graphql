import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from './dto/item.input';

@Injectable()
export class ItemService {
  constructor(private prismaService: PrismaService) {}

  getAllItems() {
    return this.prismaService.item.findMany();
  }

  getItemsByUserId(userId: number) {
    return this.prismaService.item.findMany({
      where: { userId },
    });
  }

  createItem(data: CreateItemDto) {
    return this.prismaService.item.create({ data });
  }
}
