import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import { useLoading } from "../../hooks/useLoading";

import LoginModal from "../../components/LoginModal/LoginModal";
import Layout from "../../components/Layout/Layout";
import { Loading } from "../../components/Loading/Loading";

import * as S from "./Login.styled";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/pagina-inicial" replace />;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      startLoading();
      const response = await login(email, password);

      if (response?.access_token || response?.token) {
        setIsAuthenticated(true);
        localStorage.setItem("token", response.access_token || response.token);
        navigate("/pagina-inicial");
      } else {
        alert("Falha no login: token não retornado");
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao fazer login";
      alert(errorMessage);
    } finally {
      stopLoading();
    }
  };

  return (
    <Layout>
      <Loading isVisible={isLoading} />
      <S.Container>
        <LoginModal
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </S.Container>
    </Layout>
  );
};

export default Login;
