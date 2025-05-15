import { Link } from "react-router-dom";
import * as S from "./LoginModal.styled";

interface LoginModalProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const LoginModal = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword
}: LoginModalProps) => {
    return (
        <S.FormContainer onSubmit={handleSubmit}>
            <S.Label htmlFor="email">
                E-mail
                <S.Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </S.Label>

            <S.Label>
                Senha
                <S.Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </S.Label>

            <S.Buttons>
                <span>
                    <Link to="/register">Não tem conta? Cadastre-se</Link>
                </span>
                <S.Button type="submit">Entrar</S.Button>
            </S.Buttons>
        </S.FormContainer>
    )
}

export default LoginModal
