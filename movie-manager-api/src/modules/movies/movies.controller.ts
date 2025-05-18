import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Req, ParseIntPipe } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Controller("movies")
@UseGuards(JwtAuthGuard)
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateMovieDto) {
    return this.moviesService.createMovie(req.user.id, dto);
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
  update(@Req() req, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdateMovieDto) {
    return this.moviesService.updateMovie(req.user.id, id, dto);
  }

  @Delete(":id")
  remove(@Req() req, @Param("id", ParseIntPipe) id: number) {
    return this.moviesService.removeMovie(req.user.id, id);
  }
}