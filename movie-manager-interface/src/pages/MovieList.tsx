import { useEffect, useState } from "react";
import styled from "styled-components";
import ProtectedRoute from "../routes/ProtectedRoute";
import { getAllMovies } from "../services/api";

interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  description: string;
  budget: number;
  releaseDate: Date;
  duration: number;
  genre: string;
  rating: string;
  userId: number
}

const Container = styled.div`
  max-width: 960px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: ${({ theme }) => (theme.background === "#121212" ? "#222" : "#fff")};
  border-radius: 8px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.text}22;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: default;
`;

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");
        const movies = await getAllMovies();
        setMovies(movies);
      } catch (err) {
        setError("Erro ao carregar filmes. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <Container>Carregando filmes...</Container>;
  if (error) return <Container>{error}</Container>;

  return (
    <ProtectedRoute>
      <Container>
        <h2>Filmes</h2>
        <Grid>
          {movies.length > 0 ? movies.map((movie) => (
            <Card key={movie.id}>
              {movie.title}
            </Card>
          ))
            :
            <>Nenhum filme</>
          }
        </Grid>
      </Container>
    </ProtectedRoute>
  );
};

export default MovieList;
