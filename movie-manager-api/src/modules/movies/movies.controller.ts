import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Req, ParseIntPipe, UseInterceptors, UploadedFile } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { Express } from "express";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { CloudflareR2Service } from "@/services/cloudflare-r2.service";
import { PrismaService } from "@/prisma/prisma.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("movies")
@UseGuards(JwtAuthGuard)
export class MoviesController {
  constructor(
    private readonly r2Service: CloudflareR2Service,
    private moviesService: MoviesService
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor("posterUrl"))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
    @Body() dto: CreateMovieDto
  ) {
    let posterUrl = '';

    if (file) {
      const key = `posters/${file.originalname}`;
      posterUrl = await this.r2Service.uploadImage(key, file.buffer, file.mimetype);
    }

    const movieData = {
      ...dto,
      posterUrl,
    };

    return this.moviesService.createMovie(req.user.id, movieData);
  }

  @Get()
  findAll(@Req() req) {
    return this.moviesService.findAll(req.user.id);
  }

  @Get(":id")
  findOne(@Req() req, @Param("id", ParseIntPipe) id: number) {
    return this.moviesService.findOne(req.user.id, id);
  }

  @Patch(":id")
  @UseInterceptors(FileInterceptor("posterUrl"))
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateMovieDto
  ) {
    const currentMovie = await this.moviesService.findOne(req.user.id, id);

    const parts = currentMovie.posterUrl?.split("/") || [];
    const posterFileName = parts.length > 0 ? parts[parts.length - 1] : "";
    const key = `posters/${file.originalname}`;

    let posterUrl = '';

    if (file && posterFileName !== key.split("/").pop()) {
      // excluir imagem anterior (implementar depois)
      posterUrl = await this.r2Service.uploadImage(key, file.buffer, file.mimetype);
    }

    const movieData = {
      ...dto,
      posterUrl,
    };

    return this.moviesService.updateMovie(req.user.id, id, movieData);
  }

  @Delete(":id")
  remove(@Req() req, @Param("id", ParseIntPipe) id: number) {
    return this.moviesService.removeMovie(req.user.id, id);
  }
}