import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.input';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  getAllUsers() {
    return this.prismaService.user.findMany();
  }

  getUserById(id: number) {
    return this.prismaService.user.findFirst({
      where: { id },
    });
  }

  async getUserByItemId(id: number) {
    const item = await this.prismaService.item.findFirst({
      include: {
        user: true,
      },
      where: { id },
    });

    return item.user;
  }

  createUser(data: CreateUserDto) {
    return this.prismaService.user.create({ data });
  }
}
