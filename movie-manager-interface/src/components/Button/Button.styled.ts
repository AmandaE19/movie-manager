import styled, { css } from "styled-components";

const disabledPrimary = css`
  background-color: ${({ theme }) => theme.colors.button?.primary[4]};
  color: ${({ theme }) => theme.colors.button?.primary.text[2]};
  cursor: not-allowed;
  pointer-events: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
`;

const disabledSecondary = css`
  background-color: ${({ theme }) => theme.colors.button?.secondary[4]};
  color: ${({ theme }) => theme.colors.button?.secondary.text[2]};
  cursor: not-allowed;
  pointer-events: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  width: fit-content;
  height: fit-content;
  min-height: 44px;
  border-radius: 2px;
  padding: 12px 20px;
  
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ variant = "primary" }) =>
    variant === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.button?.primary[1]};
      color:${({ theme }) => theme.colors.button?.primary.text[1]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.button?.primary[2]};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.button?.primary[3]};
      }
      &:disabled {
        ${disabledPrimary}
      }
    `}

  ${({ variant = "primary" }) =>
    variant === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.colors.button?.secondary[1]};
      color: ${({ theme }) => theme.colors.button?.secondary.text[1]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.button?.secondary[2]};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.button?.secondary[3]};
      }
      &:disabled {
        ${disabledSecondary}
      }
    `}
`;
