import { Link } from "react-router-dom";
import * as S from "./LoginModal.styled";
import Input from "../Input/Input";
import Button from "../Button/Button";

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
            <Input
                label="Nome/E-mail"
                type="email"
                placeholder="Digite seu nome/E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <Input
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />

            <S.Buttons>
                <span>
                    <Link to="/register">Esqueci minha senha</Link>
                </span>
                <Button>Entrar</Button>
            </S.Buttons>
        </S.FormContainer>
    )
}

export default LoginModal
