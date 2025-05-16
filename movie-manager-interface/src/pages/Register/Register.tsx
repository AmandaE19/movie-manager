import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../../services/api";

import RegisterModal from "../../components/RegisterModal/RegisterModal";
import Layout from "../../components/Layout/Layout";

import * as S from "./Register.styled";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/movies" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("As senhas não coincidem.");
      return;
    }
    if (name && email && password) {
      const response = await register(name, email, password);

      if (response.access_token) {
        localStorage.setItem("token", response.access_token);
        localStorage.setItem("user", JSON.stringify(response.user));

        setIsAuthenticated(true);
        navigate("/movies");
      } else {
        alert("Falha no login: token não retornado");
      }
    }
  };

  return (
    <Layout>
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
