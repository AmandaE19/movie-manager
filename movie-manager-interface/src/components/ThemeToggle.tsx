import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const Button = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  border-radius: 4px;
`;

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return <Button onClick={toggleTheme}>{isDark ? "Light Mode" : "Dark Mode"}</Button>;
};

export default ThemeToggle;
