import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MovieList from "../pages/MovieList";
import ProtectedRoute from "./ProtectedRoute";

import { useAuth } from "../context/AuthContext";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/movies" replace /> : <Login />
        }
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/movies"
        element={
          <ProtectedRoute>
            <MovieList />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
  );
};

export default AppRoutes;