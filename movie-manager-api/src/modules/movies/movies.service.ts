import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async createMovie(userId: number, dto: CreateMovieDto) {
    return this.prisma.movie.create({
      data: {
        ...dto,
        userId,
        // releaseDate: dto.releaseDate,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.movie.findMany({
      where: { userId },
    });
  }

  async findOne(userId: number, movieId: number) {
    const movie = await this.prisma.movie.findFirst({
      where: { id: movieId, userId },
    });
    if (!movie) throw new NotFoundException("Movie not found");
    return movie;
  }

  async updateMovie(userId: number, movieId: number, dto: UpdateMovieDto) {
    await this.findOne(userId, movieId);
    return this.prisma.movie.update({
      where: { id: movieId },
      data: {
        ...dto,
        // releaseDate: dto.releaseDate ? new Date(dto.releaseDate) : undefined,
      },
    });
  }

  async removeMovie(userId: number, movieId: number) {
    await this.findOne(userId, movieId);
    return this.prisma.movie.delete({
      where: { id: movieId },
    });
  }
}