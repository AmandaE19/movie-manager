import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import * as S from "./Login.styled";

import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";

import LoginModal from "../../components/LoginModal/LoginModal";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/movies" replace />;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // impede recarregar a página

    try {
      const response = await login(email, password);

      if (response.access_token) {
        localStorage.setItem("token", response.access_token);
        localStorage.setItem("user", JSON.stringify(response.user));
        // localStorage.setItem("isAuthenticated", "true");

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
    <S.Container>
      <S.Background />
      <TopBar />
      <S.Content>
        <LoginModal
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default Login;
