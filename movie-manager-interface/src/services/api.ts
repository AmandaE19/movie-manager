import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});


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