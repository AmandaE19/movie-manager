import axios from "axios";
import type { Movie } from "../types/global";
import { mockApi, shouldUseMock } from "./mockApi";

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
    if (shouldUseMock()) {
      return await mockApi.login(email, password);
    }
    
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erro ao fazer login";
    alert(errorMessage);
  }
};

export const register = async (name: string, email: string, password: string) => {
  try {
    if (shouldUseMock()) {
      return await mockApi.register(name, email);
    }
    
    const response = await api.post("/auth/register", { name, email, password });
    return response.data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erro ao criar usuário";
    alert(errorMessage);
  }
}

export const getAllMovies = async () => {
  try {
    if (shouldUseMock()) {
      return await mockApi.getAllMovies();
    }
    
    const response = await api.get("/movies");
    return response.data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erro ao carregar filmes";
    alert(errorMessage);
  }
};

export const getOneMovies = async (movieId: string) => {
  try {
    if (shouldUseMock()) {
      return await mockApi.getOneMovies(movieId);
    }
    
    const response = await api.get(`/movies/${movieId}`);
    return response.data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Filme não encontrado";
    alert(errorMessage);
  }
};

export const createMovie = async (movieToSend: Movie | FormData) => {
  try {
    if (shouldUseMock()) {
      return await mockApi.createMovie(movieToSend);
    }
    
    const response = await api.post("/movies", movieToSend, {
      headers: movieToSend instanceof FormData ? { "Content-Type": "multipart/form-data" } : undefined,
    });
    return response.data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erro ao criar filme";
    alert(errorMessage);
  }
}

export const updateMovie = async (movieId: string, movieToSend: Movie | FormData) => {
  try {
    if (shouldUseMock()) {
      return await mockApi.updateMovie(movieId, movieToSend);
    }
    
    const response = await api.patch(`/movies/${movieId}`, movieToSend, {
      headers: movieToSend instanceof FormData ? { "Content-Type": "multipart/form-data" } : undefined,
    });
    return response.data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erro ao atualizar filme";
    alert(errorMessage);
  }
}

export const deleteMovie = async (movieId: string) => {
  try {
    if (shouldUseMock()) {
      return await mockApi.deleteMovie(movieId);
    }
    
    await api.delete(`/movies/${movieId}`);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erro ao excluir filme";
    alert(errorMessage);
  }
}