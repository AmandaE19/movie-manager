import type { Movie } from "../types/global";

// Simula delay de requisição para o backend
const delay = (ms: number = 1500) => new Promise(resolve => setTimeout(resolve, ms));

// Dados mock de filmes
const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Vingadores: Ultimato",
    originalTitle: "Avengers: Endgame",
    tagline: "Parte da jornada é o fim.",
    description: "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido às ações de Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez para desfazer as ações de Thanos e restaurar o equilíbrio do universo.",
    posterUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    releaseDate: "2019-04-26",
    duration: "181",
    status: "Lançado",
    language: "Inglês",
    budget: "356000000",
    revenue: "2797800564",
    popularity: "114.966",
    voteCount: "24537",
    rating: "8.3",
    genres: "Aventura, Ficção científica, Ação",
    trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
    id: "2",
    title: "Duna",
    originalTitle: "Dune",
    tagline: "Sonhos são mensagens do profundo.",
    description: "Paul Atreides, um jovem brilhante e talentoso nascido com um grande destino que vai além de sua compreensão, deve viajar para o planeta mais perigoso do universo para garantir o futuro de sua família e seu povo.",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    releaseDate: "2021-10-22",
    duration: "155",
    status: "Lançado",
    language: "Inglês",
    budget: "165000000",
    revenue: "401763694",
    popularity: "47.135",
    voteCount: "8924",
    rating: "7.8",
    genres: "Ficção científica, Aventura",
    trailerUrl: "https://www.youtube.com/watch?v=n9xhJrPXop4"
  },
  {
    id: "3",
    title: "Matrix",
    originalTitle: "The Matrix",
    tagline: "A realidade é um estado de espírito.",
    description: "Um programador de computador descobre que a realidade não é o que parece quando misteriosos rebeldes o conduzem ao verdadeiro mundo.",
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    releaseDate: "1999-03-31",
    duration: "136",
    status: "Lançado",
    language: "Inglês",
    budget: "63000000",
    revenue: "463517383",
    popularity: "60.416",
    voteCount: "25147",
    rating: "8.2",
    genres: "Ação, Ficção científica",
    trailerUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    id: "4",
    title: "Interestelar",
    originalTitle: "Interstellar",
    tagline: "A humanidade nasceu na Terra. Ela nunca foi feita para morrer aqui.",
    description: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie.",
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    releaseDate: "2014-11-07",
    duration: "169",
    status: "Lançado",
    language: "Inglês",
    budget: "165000000",
    revenue: "677463813",
    popularity: "104.431",
    voteCount: "34805",
    rating: "8.4",
    genres: "Drama, Ficção científica, Aventura",
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: "5",
    title: "Cidade de Deus",
    originalTitle: "City of God",
    tagline: "Se correr o bicho pega, se ficar o bicho come.",
    description: "Buscapé é um jovem pobre, negro e muito sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio.",
    posterUrl: "https://image.tmdb.org/t/p/w500/k7eYdcdYVKNbxtQn9Ulf2TjAc4J.jpg",
    releaseDate: "2002-08-30",
    duration: "130",
    status: "Lançado",
    language: "Português",
    budget: "3300000",
    revenue: "27387381",
    popularity: "23.054",
    voteCount: "8570",
    rating: "8.4",
    genres: "Drama, Crime",
    trailerUrl: "https://www.youtube.com/watch?v=dcUOO4Itgmw"
  },
  {
    id: "6",
    title: "O Senhor dos Anéis: A Sociedade do Anel",
    originalTitle: "The Lord of the Rings: The Fellowship of the Ring",
    tagline: "Um anel para dominá-los a todos.",
    description: "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal.",
    posterUrl: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    releaseDate: "2001-12-19",
    duration: "178",
    status: "Lançado",
    language: "Inglês",
    budget: "93000000",
    revenue: "871368364",
    popularity: "86.921",
    voteCount: "23947",
    rating: "8.4",
    genres: "Aventura, Fantasia, Ação",
    trailerUrl: "https://www.youtube.com/watch?v=V75dMMIW2B4"
  },
  {
    id: "7",
    title: "Parasita",
    originalTitle: "기생충",
    tagline: "O ato está prestes a começar.",
    description: "Toda a família de Ki-taek está desempregada, vivendo em um porão fedorento. Uma oportunidade se apresenta quando o filho consegue um emprego como tutor da filha de uma família rica.",
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    releaseDate: "2019-05-30",
    duration: "132",
    status: "Lançado",
    language: "Coreano",
    budget: "11400000",
    revenue: "258760009",
    popularity: "44.123",
    voteCount: "17455",
    rating: "8.5",
    genres: "Comédia, Thriller, Drama",
    trailerUrl: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
  },
  {
    id: "8",
    title: "Joker",
    originalTitle: "Joker",
    tagline: "Coloque um sorriso no rosto.",
    description: "Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma sessão com a assistente social, devido aos seus conhecidos problemas mentais.",
    posterUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    releaseDate: "2019-10-04",
    duration: "122",
    status: "Lançado",
    language: "Inglês",
    budget: "55000000",
    revenue: "1074251311",
    popularity: "61.241",
    voteCount: "24821",
    rating: "8.2",
    genres: "Crime, Thriller, Drama",
    trailerUrl: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
  },
  {
    id: "9",
    title: "A Origem",
    originalTitle: "Inception",
    tagline: "Sua mente é a cena do crime.",
    description: "Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a proposta de realizar uma tarefa impossível: plantar uma ideia na mente de alguém.",
    posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    releaseDate: "2010-07-16",
    duration: "148",
    status: "Lançado",
    language: "Inglês",
    budget: "160000000",
    revenue: "836848102",
    popularity: "83.315",
    voteCount: "35077",
    rating: "8.4",
    genres: "Ação, Ficção científica, Mistério",
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: "10",
    title: "Pulp Fiction: Tempo de Violência",
    originalTitle: "Pulp Fiction",
    tagline: "Você nunca pode dizer o que vai passar na mente de alguém.",
    description: "Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é obrigado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta, e uma dupla de assaltantes de pequenos restaurantes.",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    releaseDate: "1994-10-14",
    duration: "154",
    status: "Lançado",
    language: "Inglês",
    budget: "8000000",
    revenue: "214179088",
    popularity: "88.914",
    voteCount: "27324",
    rating: "8.5",
    genres: "Thriller, Crime",
    trailerUrl: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },
  {
    id: "11",
    title: "Pulp Fiction: Tempo de Violência",
    originalTitle: "Pulp Fiction",
    tagline: "Você nunca pode dizer o que vai passar na mente de alguém.",
    description: "Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é obrigado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta, e uma dupla de assaltantes de pequenos restaurantes.",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    releaseDate: "1994-10-14",
    duration: "154",
    status: "Lançado",
    language: "Inglês",
    budget: "8000000",
    revenue: "214179088",
    popularity: "88.914",
    voteCount: "27324",
    rating: "8.5",
    genres: "Thriller, Crime",
    trailerUrl: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  }
];

// Mock user para autenticação
const mockUser = {
  id: 1,
  name: "Usuário Mock",
  email: "usuario@mock.com",
  token: "mock-jwt-token-12345"
};

let isLoggedIn = false;

export const mockApi = {
  // Simula login
  login: async (email: string, password: string) => {
    await delay(1200);
    
    if (email === "usuario@mock.com" && password === "123456") {
      isLoggedIn = true;
      localStorage.setItem("token", mockUser.token);
      return {
        message: "Login realizado com sucesso",
        token: mockUser.token,
        user: {
          id: mockUser.id,
          name: mockUser.name,
          email: mockUser.email
        }
      };
    } else {
      throw new Error("Credenciais inválidas");
    }
  },

  // Simula registro
  register: async (name: string, email: string) => {
    await delay(1000);
    
    if (email === "usuario@mock.com") {
      throw new Error("E-mail já cadastrado");
    }
    
    return {
      message: "Usuário criado com sucesso",
      user: {
        id: Date.now(),
        name,
        email,
      }
    };
  },

  // Simula buscar todos os filmes
  getAllMovies: async () => {
    await delay(800);
    
    if (!isLoggedIn && !localStorage.getItem("token")) {
      throw new Error("Token não fornecido");
    }
    
    return mockMovies;
  },

  // Simula buscar um filme específico
  getOneMovies: async (movieId: string) => {
    await delay(600);
    
    if (!isLoggedIn && !localStorage.getItem("token")) {
      throw new Error("Token não fornecido");
    }
    
    const movie = mockMovies.find(m => m.id === movieId);
    if (!movie) {
      throw new Error("Filme não encontrado");
    }
    
    return movie;
  },

  // Simula criar um filme
  createMovie: async (movieToSend: Movie | FormData) => {
    await delay(1500);
    
    if (!isLoggedIn && !localStorage.getItem("token")) {
      throw new Error("Token não fornecido");
    }

    let movieData: Movie;
    
    if (movieToSend instanceof FormData) {
      // Converte FormData para objeto Movie
      movieData = {
        title: movieToSend.get("title") as string || "",
        originalTitle: movieToSend.get("originalTitle") as string || "",
        tagline: movieToSend.get("tagline") as string || "",
        description: movieToSend.get("description") as string || "",
        posterUrl: "https://image.tmdb.org/t/p/w500/mock-poster.jpg", // Mock poster URL
        releaseDate: movieToSend.get("releaseDate") as string || "",
        duration: movieToSend.get("duration") as string || "",
        status: movieToSend.get("status") as string || "",
        language: movieToSend.get("language") as string || "",
        budget: movieToSend.get("budget") as string || "",
        revenue: movieToSend.get("revenue") as string || "",
        popularity: movieToSend.get("popularity") as string || "",
        voteCount: movieToSend.get("voteCount") as string || "",
        rating: movieToSend.get("rating") as string || "",
        genres: movieToSend.get("genres") as string || "",
        trailerUrl: movieToSend.get("trailerUrl") as string || ""
      };
    } else {
      movieData = movieToSend;
    }
    
    const newMovie: Movie = {
      ...movieData,
      id: String(Date.now())
    };
    
    mockMovies.push(newMovie);
    
    return {
      message: "Filme criado com sucesso",
      movie: newMovie
    };
  },

  // Simula atualizar um filme
  updateMovie: async (movieId: string, movieToSend: Movie | FormData) => {
    await delay(1200);
    
    if (!isLoggedIn && !localStorage.getItem("token")) {
      throw new Error("Token não fornecido");
    }
    
    const movieIndex = mockMovies.findIndex(m => m.id === movieId);
    if (movieIndex === -1) {
      throw new Error("Filme não encontrado");
    }

    let movieData: Partial<Movie>;
    
    if (movieToSend instanceof FormData) {
      movieData = {};
      for (const [key, value] of movieToSend.entries()) {
        if (key !== "posterUrl" || !value) {
          (movieData as Record<string, unknown>)[key] = value;
        }
      }
      if (movieToSend.get("posterUrl")) {
        movieData.posterUrl = "https://image.tmdb.org/t/p/w500/updated-poster.jpg";
      }
    } else {
      movieData = movieToSend;
    }
    
    mockMovies[movieIndex] = { ...mockMovies[movieIndex], ...movieData };
    
    return {
      message: "Filme atualizado com sucesso",
      movie: mockMovies[movieIndex]
    };
  },

  // Simula deletar um filme
  deleteMovie: async (movieId: string) => {
    await delay(800);
    
    if (!isLoggedIn && !localStorage.getItem("token")) {
      throw new Error("Token não fornecido");
    }
    
    const movieIndex = mockMovies.findIndex(m => m.id === movieId);
    if (movieIndex === -1) {
      throw new Error("Filme não encontrado");
    }
    
    mockMovies.splice(movieIndex, 1);
    
    return {
      message: "Filme deletado com sucesso"
    };
  }
};

// Função para verificar se deve usar mock
export const shouldUseMock = () => {
  // Verifica variável de ambiente do Vite
  const envMock = import.meta.env?.VITE_USE_MOCK === 'true';
  
  // Verifica se a página foi carregada com a query string mock=true
  const urlParams = new URLSearchParams(window.location.search);
  const mockFromUrl = urlParams.get('mock') === 'true';
  
  // Verifica localStorage para persistir a configuração
  const mockFromStorage = localStorage.getItem('useMockMode') === 'true';
  
  return envMock || mockFromUrl || mockFromStorage;
};
