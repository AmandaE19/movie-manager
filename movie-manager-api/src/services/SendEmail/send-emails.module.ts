import { Module } from "@nestjs/common";
import { MovieNotificationController } from "./send-emails.controller";
import { MoviesService } from "@/modules/movies/movies.service";
import { PrismaService } from "@/prisma/prisma.service";
import { MoviesModule } from "@/modules/movies/movies.module";
import { EmailService } from "./send-emails.service";
import { UsersService } from "@/modules/users/users.service";

@Module({
    imports: [MoviesModule],
    controllers: [MovieNotificationController],
    providers: [MoviesService, UsersService, PrismaService, EmailService],
})
export class SendEmailsModule { }
