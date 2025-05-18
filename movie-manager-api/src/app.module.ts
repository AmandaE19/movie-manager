import { Module } from "@nestjs/common";
import { PrismaModule } from "@/prisma/prisma.module";
import { AuthModule } from "@/modules/auth/auth.module";
import { UsersModule } from "@/modules/users/users.module";
import { MoviesModule } from "@/modules/movies/movies.module";
import { SendEmailsModule } from "./services/SendEmail/send-emails.module";

@Module({
	imports: [PrismaModule, AuthModule, UsersModule, MoviesModule, SendEmailsModule],
})
export class AppModule {}
