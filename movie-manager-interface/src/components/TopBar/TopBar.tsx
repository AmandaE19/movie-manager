import * as S from "./TopBar.styled";
import LogoCubos from "../../assets/images/cubos-logo.svg";

import { Sun, Moon } from "phosphor-react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const { isDark, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <S.Container>
      <S.Title>
        <img src={LogoCubos} alt="Logo da Cubos" />
        <span>Movies</span>
      </S.Title>

      <S.Buttons>
        <S.ThemeButton>
          {isDark ? <Sun onClick={toggleTheme} /> : <Moon onClick={toggleTheme} />}
        </S.ThemeButton>
        <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
      </S.Buttons>
    </S.Container>
  );
};

export default TopBar;