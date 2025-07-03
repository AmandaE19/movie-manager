import type { ButtonProps } from "../../types/global";
import * as S from "./Button.styled";

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...rest }) => {
  return (
    <S.Button variant={variant} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
