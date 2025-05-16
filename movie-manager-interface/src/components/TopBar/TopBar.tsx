import * as S from "./TopBar.styled";

import LogoCubos from "../../assets/images/cubos-logo.svg";
import LogoCubosMobile from "../../assets/images/cubos-logo-mobile.svg";

import Sun from "../../assets/icons/Sun.svg";
import Moon from "../../assets/icons/Moon.svg";

import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TopBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 600);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <S.Container>
      <S.Title>
        <S.Logo src={isMobile ? LogoCubosMobile : LogoCubos} alt="Logo da Cubos" />
        <span>Movies</span>
      </S.Title>

      <S.Buttons>
        <S.ThemeButton onClick={toggleTheme}>
          {isDark ? <img src={Sun} alt="Ícone do sol" /> : <img src={Moon} alt="Ícone da lua" />}
        </S.ThemeButton>
        <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
      </S.Buttons>
    </S.Container>
  );
};

export default TopBar;