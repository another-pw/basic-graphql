import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.input';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private prismaService: PrismaService) {}

  async getAllUsers() {
    const users = await this.prismaService.user.findMany();
    this.logger.log(users);
    return users;
  }

  createUser(data: CreateUserDto) {
    return this.prismaService.user.create({ data });
  }
}
