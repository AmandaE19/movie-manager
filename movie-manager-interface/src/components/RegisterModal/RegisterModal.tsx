import { Link } from "react-router-dom";
import * as S from "./RegisterModal.styled";
import Input from "../Input/Input";
import Button from "../Button/Button";
import type { RegisterModalProps } from "../../types/global";

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
            <Input
                label="Nome"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />

            <Input
                label="E-mail"
                type="email"
                placeholder="Digite seu e-mail"
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

            <Input
                label="Confirmação de senha"
                type="password"
                placeholder="Digite sua senha novamente"
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                required
            />

            <S.Buttons>
                <span>
                    <Link to="/">Já possui conta? Acesse-a</Link>
                </span>
                <Button>Cadastrar</Button>
            </S.Buttons>
        </S.FormContainer>
    )
}

export default RegisterModal
