import { Injectable } from "@nestjs/common";
import { Resend } from "resend";

@Injectable()
export class EmailService {
	private resend: Resend;

	constructor() {
		this.resend = new Resend(process.env.RESEND_API_KEY);
	}

	async sendReleaseNotification(title: string, emailUser: string ) {
		await this.resend.emails.send({
			from: "Seu Nome <onboarding@resend.dev>",
			to: [emailUser],
			subject: `Novo lançamento: ${title}`,
			html: `<strong>Olá, usuário do C O filme <em>${title}</em> será lançado em hoje.</strong>`,
		});
	}
}
