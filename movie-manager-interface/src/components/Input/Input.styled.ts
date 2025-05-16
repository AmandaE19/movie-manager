import styled from "styled-components";

interface StyledInputProps {
	width?: string;
	height?: string;
}

export const InputWrapper = styled.div<StyledInputProps>`
  width: ${({ width }) => width || '100%'};
  height: fit-content;
  gap: 8px;
`;

export const Label = styled.label`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  font-size: 12.8px;
  line-height:100%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.text };
`;

export const Input = styled.input<StyledInputProps>`
  width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || 'fit-content'};
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.mauve[6]};
  background-color: ${({ theme }) => theme.colors.mauve[2]};
  text-indent: 10px;
  
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: 16px;
  line-height:100%;
  letter-spacing: 0px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mauve[8]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purple[9]};
  }
`;
