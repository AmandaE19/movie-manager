import axios from "axios";
import type { Movie } from "../types/global";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (config.url && (config.url.includes("/auth/login") || config.url.includes("/auth/register"))) {
    return config;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error: any) {
    alert(error.response?.data?.message || "Erro ao fazer login");
  }
};

export const register = async (name: string, email: string, password: string) => {
  try {
    const response = await api.post("/auth/register", { name, email, password });
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

export const createMovie = async (movieToSend: Movie | FormData) => {
  try {
    const response = await api.post("/movies", movieToSend, {
      headers: movieToSend instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
    });
    return response.data;
  } catch (error: any) {
    alert(error.response?.data?.message || "Erro ao criar usuário");
  }
}

export const updateMovie = async (movieId: string, movieToSend: Movie | FormData) => {
  try {
    const response = await api.patch(`/movies/${movieId}`, movieToSend, {
      headers: movieToSend instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
    });
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