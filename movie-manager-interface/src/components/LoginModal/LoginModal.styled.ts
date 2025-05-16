import styled from "styled-components";

export const FormContainer = styled.form`
  position: absolute;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  padding: 16px;
  gap: 16px;
  background-color: #232225;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
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
    color: #8E4EC6;
    margin-right: 25px;
  }
`;