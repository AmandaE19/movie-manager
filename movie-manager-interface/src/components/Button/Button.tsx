import * as S from "./Button.styled";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...rest }) => {
  return (
    <S.Button variant={variant} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
