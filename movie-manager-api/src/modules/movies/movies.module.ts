import { Module } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { MoviesController } from "./movies.controller";
import { AuthModule } from "../auth/auth.module";
import { R2Module } from "@/services/R2Storage/r2.module";

@Module({
  imports: [AuthModule, R2Module],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
