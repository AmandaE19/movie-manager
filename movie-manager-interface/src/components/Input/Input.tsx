import React from "react";
import * as S from "./Input.styled";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...rest }, ref) => {
  return (
    <S.InputWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Input ref={ref} {...rest} />
    </S.InputWrapper>
  );
});

Input.displayName = "Input";

export default Input;