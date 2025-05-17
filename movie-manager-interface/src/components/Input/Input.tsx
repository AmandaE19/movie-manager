import React from "react";
import * as S from "./Input.styled";
import type { InputProps } from "../../types/global";

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