import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MovieList from "../pages/InitialPage/InitialPage";
import MovieDetails from "../pages/MovieDetail/MovieDetail";

import { useAuth } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/pagina-inicial" replace /> : <Login />
        }
      />
      <Route path="/criar-conta"
        element={
          isAuthenticated ? <Navigate to="/pagina-inicial" replace /> : <Register />
        }
      />
      <Route
        path="/pagina-inicial"
        element={
          <ProtectedRoute>
            <MovieList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/detalhes/:id"
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
  );
};

export default AppRoutes;