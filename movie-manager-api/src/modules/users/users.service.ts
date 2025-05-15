import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { RegisterDto } from "@/modules/auth/dto/register.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: RegisterDto) {
    const { name, email, password } = dto;

    const user = await this.prisma.user.create({
      data: { name, email, password },
    });

    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
