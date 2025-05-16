import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

type Movie = {
  title: string;
  originalTitle: string;
  tagline: string;
  description: string;
  posterUrl: string;
  releaseDate: string;
  duration: string;
  status: string;
  language: string;
  budget: string;
  revenue: string;
  popularity: string;
  voteCount: string;
  rating: string;
  genres: string[];
  trailerUrl: string;
}

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    alert(error.response?.data?.message || 'Erro ao fazer login');
  }
};

export const register = async (name: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  } catch (error: any) {
    alert(error.response?.data?.message || "Erro ao criar usuário");
  }
}

export const getAllMovies = async () => {
  try {
    const response = await api.get("/movies");
    return response.data;
  } catch (error: any) {
    alert(error.response?.data?.message || "Erro ao carregar filmes");
  }
};

export const createMovie = async (movieToSend: Movie ) => {
  try {
    const response = await api.post('/movies', movieToSend );
    return response.data;
  } catch (error: any) {
    alert(error.response?.data?.message || "Erro ao criar usuário");
  }
}