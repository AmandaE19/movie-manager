import { Link } from "react-router-dom";
import * as S from "./RegisterModal.styled";

interface RegisterModalProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordConfirm: string;
  setPasswordConfirm: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterModal = ({
  handleSubmit,
  name, 
  setName,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm
}: RegisterModalProps) => {
    return (
        <S.FormContainer onSubmit={handleSubmit}>
            <S.Label>
                Nome
                <S.Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </S.Label>

            <S.Label>
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

            <S.Label>
                Confirmação de senha
                <S.Input
                    type="password"
                    placeholder="Digite sua senha novamente"
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)}
                    required
                />
            </S.Label>

            <S.Buttons>
                <span>
                    <Link to="/">Já possui uma conta? Acesse-a</Link>
                </span>
                <S.Button type="submit">Cadastrar</S.Button>
            </S.Buttons>
        </S.FormContainer>
    )
}

export default RegisterModal
