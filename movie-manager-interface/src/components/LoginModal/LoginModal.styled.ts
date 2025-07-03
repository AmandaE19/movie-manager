import styled from "styled-components";

export const FormContainer = styled.form`
  position: absolute;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  padding: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.mauve[3]};
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    text-decoration: underline;
    transition: background-color 0.3s;
    font-style: solid;
    offset: 0%;
    text-decoration-thickness: 0%;
    color: ${({ theme }) => theme.colors.purple[9]};
    margin-right: 25px;
  }
`;