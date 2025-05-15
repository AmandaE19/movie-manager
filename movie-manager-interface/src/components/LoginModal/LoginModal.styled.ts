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

export const Label = styled.label`
  width: 380px;
  height: fit-content;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #232225;
  
  color: #EEEEF0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 12.8px;
  line-height: 100%;
  letter-spacing: 0px;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 380px;
  height: fit-content;
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid #3C393F;
  padding: 12px;
  background-color: #1A191B;
  color: #6F6D78;

  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;

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
  }
`;

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  min-height: 44px;
  border-radius: 2px;
  padding: 12px 20px;
  background-color: #8E4EC6;
  color: white;
  border: none;
  cursor: pointer;
  
  
  &:hover {
    background-color: #864ee0;
  }
`;