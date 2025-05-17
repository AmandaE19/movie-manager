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
  genres: string;
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

export const getOneMovies = async (movieId: string) => {
  try {
    const response = await api.get(`/movies/${movieId}`);
    return response.data;
  } catch (error: any) {
    alert(error.response?.data?.message || "Filme não encontrado");
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

export const updateMovie = async (movieId: string, movieToSend: Movie ) => {
  try {
    const response = await api.patch(`/movies/${movieId}`, movieToSend );
    return response.data;
  } catch (error: any) {
    alert(error.response?.data?.message || "Erro ao atualizar filme");
  }
}

export const deleteMovie = async (movieId: string) => {
  try {
    await api.delete(`/movies/${movieId}`);
  } catch(error: any) {
    alert(error.response?.data?.message || "Erro ao excluir filme");
  }
}