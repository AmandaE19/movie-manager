
# Cubos Movie API

Este projeto é uma API para gerenciar filmes, incluindo funcionalidades para cadastro, atualização, listagem e envio de notificações por e-mail.

---

## Tecnologias Utilizadas

- **NestJS** — Framework backend.  
- **Prisma** — ORM para interagir com o banco de dados.  
- **PostgreSQL** — Banco de dados.  
- **Cloudflare R2** — Armazenamento de imagens (posters dos filmes).  
- **Resend** — Serviço para envio de e-mails.  
- **JWT** — Autenticação via tokens JSON Web Tokens.  
- **TypeScript** — Linguagem usada no desenvolvimento.  
- **GitHub Actions** — Automação de tarefas (envio de e-mails via CRON).  
- **React** — Stack para frontend.  

---

## Como rodar o projeto

### Requisitos

- Node.js (versão 18 ou superior recomendada)  
- Banco de dados PostgreSQL instalado na máquina (Sugestão: PostgreSQL 17)  
- Conta na Cloudflare R2 para upload das imagens  
- Conta no Resend para envio de e-mails  
- Variáveis de ambiente configuradas (veja `.env.example`)  

### 1. Clone o repositório (Ele contém o backend e frontend da aplicação):

```bash
git clone https://github.com/AmandaE19/movie-manager.git
cd movie-manager
```

---

## Passos para rodar o backend

### Instale as dependências

```bash
cd movie-manager-api
npm install
```

### Configure o arquivo `.env` com suas variáveis

Crie um arquivo `.env` na raiz do backend do projeto (`movie-manager-api`) e preencha as variáveis (Siga o modelo em `.env.example`):

```bash
DATABASE_URL="postgresql://{username}:{password}@localhost:5432/movie_manager?schema=public"
JWT_SECRET="jwt-secret"

CF_R2_BUCKET_NAME="{r2-bucket-name}"
CF_R2_ENDPOINT="{r2-endpoint}"
CF_R2_ACCESS_KEY_ID="{r2-key-id}"
CF_R2_SECRET_ACCESS_KEY="{r2-secret-access-key}"
IMAGES_BASE_BUCKET_URL="{r2-public-url-dev}/{r2-bucket-name}"

RESEND_API_KEY="{resend-api-key}"
```

### Configure o banco de dados

Para rodar a aplicação, é necessário ter o PostgreSQL instalado e configurado.

#### Criar o banco e aplicar as migrations

- Abra seu pgAdmin 4 (Caso ainda não tenha conta será necessário a criação, pois você precisará e usará o username e password no `.env` em `DATABASE_URL`)  
- Expanda as opções Servers/PostgreSQL 17 (ou sua versão)  
- Clique com o botão direito sobre Databases, selecione **Create > Database...**  
- Dê o nome do seu banco `"movie-manager"` e clique em **Save**  
- Volte ao código backend e com terminal ainda em `movie-manager/movie-manager-api`, execute o comando:

```bash
npx prisma migrate deploy
```

### Inicie a aplicação

```bash
npm run start
```

Você verá o terminal no seguinte formato:

![alt text](print-backend-terminal.png)

---

## Passos para rodar o frontend

### Instale as dependências

Abra outro terminal, agora na raiz do projeto frontend `movie-manager/movie-manager-interface`

```bash
cd movie-manager/movie-manager-interface
npm install
```

### Inicie a aplicação

```bash
npm run dev
```

![alt text](print-frontend-terminal.png)

Abra no navegador: http://localhost:5173

![alt text](LoginPage.png)
