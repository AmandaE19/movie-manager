import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../../services/api";
import { useLoading } from "../../hooks/useLoading";

import RegisterModal from "../../components/RegisterModal/RegisterModal";
import Layout from "../../components/Layout/Layout";
import { Loading } from "../../components/Loading/Loading";

import * as S from "./Register.styled";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { isLoading, startLoading, stopLoading } = useLoading();

  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/movies" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("As senhas não coincidem.");
      return;
    }
    if (name && email && password) {
      try {
        startLoading();
        const response = await register(name, email, password);

        if (response?.access_token || response?.token) {
          localStorage.setItem("token", response.access_token || response.token);
          localStorage.setItem("user", JSON.stringify(response.user));

          setIsAuthenticated(true);
          navigate("/movies");
        } else {
          alert("Falha no registro: token não retornado");
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro ao criar conta";
        alert(errorMessage);
      } finally {
        stopLoading();
      }
    }
  };

  return (
    <Layout>
      <Loading isVisible={isLoading} />
      <S.Container>
        <RegisterModal
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
        />
      </S.Container>
    </Layout>
  );
};

export default Register;
