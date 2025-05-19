
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

Antes de preencher as informações no env, vamos coletar cada uma delas
1) username:
   - Seu username que usou para criar conta no pgAdmin 4

2) password:
   - Sua senha que usou para criar conta no pgAdmin 4

3) r2-bucket-name:
   - Abra o [R2](https://dash.cloudflare.com/login).
   - Acesse sua conta ou crie uma.
   - No menu lateral esquerdo procure por "R2 Object Storage".
   - Crie um bucket: Clique em "Create Bucket" , preencha "bucket name" com "movies-images" e finalize clicando em "Create Bucket". Esse será o valor do seu r2-bucket-name="movies-images".

4) r2-endpoint:
   - Na página "R2 Object Storage": Clique no seu bucket (movies-images).
   - Abra as configurações do Bucket em "Settings" e copie o valor de S3 API (esse será seu r2-endpoints, remova a parte /movies-images)

5) r2-key-id e r2-secret-access-key:
   - Na página "R2 Object Storage": Clique em "{} API" e em "Manage API Tokens".
   - Em Account API Tokens: Clique em "Create Account API Token".
   - Token name: r2-upload-backend
   - Em Permissions marque a opção "Object Read & Write".
   - Clique em "Create Account API Token"
   - Access Key ID: r2-key-id e Secret Access Key: r2-secret-access-key

6) r2-public-url-dev:
   - Para funcionar "Public Access" deve estar como "Enabled", se não estiver, clique em Settings e em "Public Development URL" clique em "Enable" isso irá gerar uma URL pública, essa será sua r2-public-url-dev
  
7) resend-api-key:
   - Abra o serviço [Resend](https://resend.com/login), faça login ou crie uma conta.
   - Clique em Add API Key, exiba sua API Key clicando no ícone e copie-a, essa será sua resend-api-key

8) Agora com todas as variáveis em mãos, substitua onde for necessário {nome da variável}.

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
npx prisma migrate dev --name init
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

---

## Endpoints da API

### Endpoints que não precisam de autenticação

| Método | Rota          | Descrição                   | Corpo da Requisição                                 |
|--------|---------------|-----------------------------|-----------------------------------------------------|
| POST   | /auth/login   | Realiza login               | `{ "email": "...", "password": "..." }`                | 
| POST   | /auth/register| Cria um novo usuário        | `{ "name": "...", "email": "...", "password": "..." }` |

### Endpoints que necessitam de autenticação 
> Requerem header: `Authorization: Bearer <token>`

| Método | Rota         | Descrição                        | Corpo da Requisição                              | Exemplo de Resposta          |
|--------|--------------|----------------------------------|--------------------------------------------------|------------------------------|
| POST   | /movies      | Cria um novo filme               | Campos do DTO + (opcional) imagem (multipart)    | `{ "id": 1, ... }`           |
| GET    | /movies      | Lista todos os filmes do usuário | -                                                | `[ { "id": 1, ... } ]`       |
| GET    | /movies/:id  | Busca um filme por ID            | -                                                | `{ "id": 1, ... }`           |
| PATCH  | /movies/:id  | Atualiza dados de um filme       | Campos do DTO + (opcional) imagem (multipart)    | `{ "id": 1, ... }`           |
| DELETE | /movies/:id  | Remove um filme                  | -                                                | `{ "message": "Removido" }`  |
| POST   | /emails      | Verifica se há filmes para lançar na data e envia email para o usuário | -          | `{ message: "Emails enviados", count: ... }` | 

