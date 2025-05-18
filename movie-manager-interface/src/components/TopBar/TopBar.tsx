import * as S from "./TopBar.styled";

import LogoCubosDark from "../../assets/images/darkmode/cubos-logo-dark.svg";
import LogoCubosMobileDark from "../../assets/images/darkmode/cubos-logo-mobile-dark.svg";

import LogoCubosLight from "../../assets/images/lightmode/cubos-logo-light.svg";
import LogoCubosMobileLight from "../../assets/images/lightmode/cubos-logo-mobile-light.svg";

import SunDark from "../../assets/icons/darkmode/Sun.svg";
import MoonLight from "../../assets/icons/lightmode/Moon.svg";

import { useTheme } from "../../context/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "../Button/Button";

const TopBar = () => {
  const { setIsAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 600);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <S.Container>
      <S.Title>
        <S.Logo src={isMobile ? (isDark ? LogoCubosMobileDark : LogoCubosMobileLight) : (isDark ? LogoCubosDark : LogoCubosLight)} alt="Logo da Cubos" />
        <span>Movies</span>
      </S.Title>

      <S.Buttons>
        <Button
          variant="secondary"
          onClick={toggleTheme}
        >
          {isDark ? <img style={{ width: "18px" }} src={SunDark} alt="Ícone do sol" /> : <img style={{ width: "18px" }} src={MoonLight} alt="Ícone da lua" />}
        </Button>
        <Button
          disabled={location.pathname === "/" || location.pathname === "/criar-conta"}
          onClick={handleLogout}
        >Logout</Button>
      </S.Buttons>
    </S.Container>
  );
};

export default TopBar;