import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../services/api";

const Container = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text}33;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.text}66;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/movies" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // impede recarregar a página

    try {
      const response = await login(email, password);

      if (response.access_token) {
        localStorage.setItem("token", response.access_token);
        localStorage.setItem("user", JSON.stringify(response.user));

        setIsAuthenticated(true);
        navigate("/movies");
      } else {
        alert("Falha no login: token não retornado");
      }
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao fazer login");
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </form>
      <p>
        Não tem conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </Container>
  );
};

export default Login;
