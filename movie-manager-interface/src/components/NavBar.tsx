import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.text}33;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Nav>
      <Link to="/movies">MovieApp</Link>
      <NavLinks>
        <ThemeToggle />
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;