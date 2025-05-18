import { MoviesService } from "@/modules/movies/movies.service";
import { UsersService } from "@/modules/users/users.service";
import { Controller, Post } from "@nestjs/common";
import { Movie } from "@prisma/client";
import { EmailService } from "./send-emails.service";

@Controller("emails")
export class MovieNotificationController {
    constructor(
        private readonly moviesService: MoviesService,
        private readonly usersService: UsersService,
        private readonly emailService: EmailService,
    ) { }

    @Post()
    async sendReleaseEmails() {
        const moviesToRelease = await this.moviesService.findMoviesByReleaseDate();

        if (moviesToRelease.length > 0) {
            moviesToRelease.map(async (currentMovie: Movie) => {
                const user = await this.usersService.findById(currentMovie.userId);
                if(user?.email) {
                    await this.emailService.sendReleaseNotification(currentMovie.title, user.email);
                    console.log(`E-mail enviado para: ${user.email}`);
                }
            })
            return { message: "Emails enviados", count: moviesToRelease.length };
        } else {
            return "Não há filmes com data futura"
        }
    }
}
