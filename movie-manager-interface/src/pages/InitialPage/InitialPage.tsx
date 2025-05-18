import { useEffect, useState } from "react";
import * as S from "./InitialPage.styled";

import { getAllMovies } from "../../services/api";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import AddMovieDrawer from "../../components/MovieDrawer/MovieDrawer";
import type { Movie } from "../../types/global";
import FilterModal from "../../components/FilterModal/FilterModal";

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [filterValueDurantion, setFilterValueDurantion] = useState(0);
  const [filterValueRating, setFilterValueRating] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getAllMovies();
        setMovies(movies);
      } catch (err) {
        alert("Erro ao carregar filmes. Tente novamente mais tarde.");
      }
    };
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());

    const releaseDate = new Date(movie.releaseDate);
    const initial = initialDate ? new Date(initialDate) : null;
    const final = finalDate ? new Date(finalDate) : null;
    const matchesDate =
      (!initial || releaseDate >= initial) &&
      (!final || releaseDate <= final);

    const matchesDuration = Number(movie.duration) >= filterValueDurantion;
    const matchesRating = Number(movie.rating) >= filterValueRating;

    return matchesSearch && matchesDate && matchesDuration && matchesRating;
  });

  const indexOfLastMovie = currentPage * itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    goToPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    goToPage(currentPage - 1);
  };

  const handleFilter = () => {
    setCurrentPage(1);
    setIsFilterOpen(false);
  }

  return (
    <Layout>
      <AddMovieDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      {isFilterOpen &&
        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          initialDate={initialDate}
          setInitialDate={setInitialDate}
          finalDate={finalDate}
          setFinalDate={setFinalDate}
          filterValueDurantion={filterValueDurantion}
          setFilterValueDurantion={setFilterValueDurantion}
          filterValueRating={filterValueRating}
          setFilterValueRating={setFilterValueRating}
          handleFilter={handleFilter}
        />
      }

      <S.Container>
        <S.FiltersBar>
          <div className="input-wrapper">
            <Input
              width="488px"
              height="44px"
              placeholder="Pesquise por filmes"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="buttons-container">
            <Button
              variant="secondary"
              onClick={() => setIsFilterOpen(true)}
            >Filtros</Button>
            <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>Adicionar Filme</Button>
          </div>
        </S.FiltersBar>

        <S.Movies>
          {currentMovies.length > 0 ?
            currentMovies.map((movie) => (
              <S.Card onClick={() => navigate(`/detalhes/${movie.id}`)} imageBg={movie.posterUrl || ""} key={movie.id}>
                <S.MovieLoading percentage={Number(movie.rating || 0) * 10} className="hover-element">
                  <span>{Number(movie.rating || 0) * 10}<span className="percentage">%</span></span>
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

        {/* Paginação */}
        {totalPages > 0 && (
          <S.Pagination>
            <Button variant="primary" onClick={handlePrevPage} disabled={currentPage === 1}>{"<"}</Button>

            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i + 1}
                variant="primary"
                disabled={currentPage === i + 1}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

            <Button variant="primary" onClick={handleNextPage} disabled={currentPage === totalPages}>{">"}</Button>
          </S.Pagination>
        )}
      </S.Container>
    </Layout>
  );
};

export default MovieList;
