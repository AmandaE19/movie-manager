import { useEffect, useState } from "react";
import * as S from "./InitialPage.styled";

import { getAllMovies } from "../../services/api";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import AddMovieDrawer from "../../components/AddMovieDrawer/AddMovieDrawer";
import type { Movie } from "../../types/global";

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

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

  return (
    <Layout>
      <AddMovieDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <S.Container>
        <S.FiltersBar>
          <div className="input-wrapper">
            <Input width="488px" height="44px" placeholder="Pesquise por filmes" />
          </div>
          <div className="buttons-container">
            <Button variant="secondary">Filtros</Button>
            <Button variant="primary" onClick={()=>setIsDrawerOpen(true)}>Adicionar Filme</Button>
          </div>
        </S.FiltersBar>
        <S.Movies>
          {movies.length > 0 ?
            movies.map((movie) => (
              <S.Card onClick={()=>navigate(`/detalhes/${movie.id}`)} imageBg={movie.posterUrl || ""} key={movie.id}>
                <S.MovieLoading percentage={Number(movie.rating || 0)} className="hover-element">
                  <span>
                    {movie.rating}
                  </span>
                </S.MovieLoading>
                <S.Info>
                  <span className="title">{(movie.title).toUpperCase()}</span>
                  <span className="genre hover-element">{movie.genres}</span>
                </S.Info>
              </S.Card>
            ))
          :
          <>Não há filmes</>
          }
        </S.Movies>
        {movies.length > 3 &&
          <S.Pagination>
            <Button variant="primary" disabled>-</Button>
            <Button variant="primary" disabled>1</Button>
            <Button variant="primary">2</Button>
            <Button variant="primary">3</Button>
            <Button variant="primary">4</Button>
            <Button variant="primary">5</Button>
            <Button variant="primary">-</Button>
          </S.Pagination>
        }
      </S.Container>
    </Layout>
  );
};

export default MovieList;
