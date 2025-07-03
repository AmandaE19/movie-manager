import * as S from "./MovieDetail.styled";

import Button from "../../components/Button/Button";

import Layout from "../../components/Layout/Layout";

import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { deleteMovie, getOneMovies } from "../../services/api";
import type { Movie } from "../../types/global";
import AddMovieDrawer from "../../components/MovieDrawer/MovieDrawer";
import { formatCurrencyShort, formatDate, formatMinutes, formatStringToFloat, handleStatus } from "../../utils/functions";

const MovieDetails = () => {
  const { id } = useParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  const navigate = useNavigate();

  useEffect(() => {
    const getFunction = async () => {
      if (id) {
        const response = await getOneMovies(id);
        if (response) {
          setMovie(response);
        }
      }
    }
    getFunction();
  }, [id])

  useEffect(() => {
    if (isDeleteOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDeleteOpen]);

  const handleDelete = async () => {
    if (movie && movie.id) {
      await deleteMovie(movie?.id);
      navigate("/pagina-inicial");
    }
  }

  const extractYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }

    return null;
  };

  return (
    <Layout>
      <AddMovieDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} movie={movie} />
      {isDeleteOpen &&
        <S.DeleteContainer>
          <S.ContentDeleteContainer>
            Tem certeza que deseja excluir esse filme?
            <div>
              <Button
                variant="secondary"
                onClick={() => setIsDeleteOpen(false)}
              >Cancelar</Button>
              <Button variant="primary" onClick={handleDelete}>Confirmar</Button>
            </div>
          </S.ContentDeleteContainer>
        </S.DeleteContainer>
      }

      <S.Container>
        {movie &&
          <>
            <S.InfoSection imageBg={movie?.posterUrl}>
              <S.HeaderInfoSection>
                <div>
                  <S.MovieTitle>{movie?.title || ""}</S.MovieTitle>
                  <S.MovieSubtitle>{movie?.originalTitle || ""}</S.MovieSubtitle>
                </div>
                <S.ActionsButtonRow>
                  <Button
                    variant="secondary"
                    onClick={() => setIsDeleteOpen(true)}
                  >Deletar</Button>
                  <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>Editar</Button>
                </S.ActionsButtonRow>
              </S.HeaderInfoSection>

              <S.ContentInfoSection>
                <S.MobileHeaderInfoSection>
                  <div>
                    <S.MovieTitle>{movie?.title || ""}</S.MovieTitle>
                    <S.MovieSubtitle>{movie?.originalTitle || ""}</S.MovieSubtitle>
                  </div>
                  <S.ActionsButtonRow>
                    <Button
                      variant="secondary"
                      onClick={() => setIsDeleteOpen(true)}
                    >Deletar</Button>
                    <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>Editar</Button>
                  </S.ActionsButtonRow>
                </S.MobileHeaderInfoSection>

                <S.Poster src={movie?.posterUrl || ""} alt="Poster do filme" />

                <S.InfosGrid>
                  <S.HeaderContentInfoSection>
                    <S.MovieTagline>
                      {movie?.tagline}
                    </S.MovieTagline>

                    <S.InfoGroup>
                      <S.ContainerInfoHeader>
                        <S.InfoTitle>POPULARIDADE</S.InfoTitle>
                        <S.InfoDescription>{formatStringToFloat(movie?.popularity) || ""}</S.InfoDescription>
                      </S.ContainerInfoHeader>
                      <S.ContainerInfoHeader>
                        <S.InfoTitle>VOTOS</S.InfoTitle>
                        <S.InfoDescription>{formatStringToFloat(movie?.voteCount) || ""}</S.InfoDescription>
                      </S.ContainerInfoHeader>
                      <S.RatingCircle percentage={formatStringToFloat(movie?.rating) || 0 * 10}>
                        <span>{Number(movie?.rating || 0) * 10}<span className="percentage">%</span></span>
                      </S.RatingCircle>
                    </S.InfoGroup>
                  </S.HeaderContentInfoSection>

                  <S.DivInfosGrid>
                    <S.LeftInfoGrid>
                      <S.LeftInfoGridCard>
                        <S.InfoTitle>SINOPSE</S.InfoTitle>
                        <S.InfoDescription className="description">{movie?.description || ""}</S.InfoDescription>
                      </S.LeftInfoGridCard>

                      <S.LeftInfoGridCard>
                        <S.InfoTitle>GÊNEROS</S.InfoTitle>
                        {movie.genres &&
                          <S.GenresContainer>
                            {movie.genres.split(",").map((genre, index) => (
                              <S.GenreTag key={index}>{genre}</S.GenreTag>
                            ))}
                          </S.GenresContainer>
                        }
                      </S.LeftInfoGridCard>
                    </S.LeftInfoGrid>

                    <S.RightInfoGrid>
                      <S.InfoGroupGrid>
                        <S.RightInfoGridCard>
                          <S.InfoTitle>LANÇAMENTO</S.InfoTitle>
                          <S.InfoDescription>{formatDate(movie?.releaseDate) || ""}</S.InfoDescription>
                        </S.RightInfoGridCard>
                        <S.RightInfoGridCard>
                          <S.InfoTitle>DURAÇÃO</S.InfoTitle>
                          <S.InfoDescription>{formatMinutes(movie?.duration) || ""}</S.InfoDescription>
                        </S.RightInfoGridCard>
                      </S.InfoGroupGrid>

                      <S.InfoGroupGrid>
                        <S.RightInfoGridCard>
                          <S.InfoTitle>SITUAÇÃO</S.InfoTitle>
                          <S.InfoDescription>{movie?.status || handleStatus(movie.releaseDate)}</S.InfoDescription>
                        </S.RightInfoGridCard>
                        <S.RightInfoGridCard>
                          <S.InfoTitle>IDIOMA</S.InfoTitle>
                          <S.InfoDescription>{movie?.language || ""}</S.InfoDescription>
                        </S.RightInfoGridCard>
                      </S.InfoGroupGrid>

                      <S.InfoGroupGrid>
                        <S.RightInfoGridCard>
                          <S.InfoTitle>ORÇAMENTO</S.InfoTitle>
                          <S.InfoDescription>${formatCurrencyShort(movie?.budget) || 0}</S.InfoDescription>
                        </S.RightInfoGridCard>
                        <S.RightInfoGridCard>
                          <S.InfoTitle>RECEITA</S.InfoTitle>
                          <S.InfoDescription>${formatCurrencyShort(movie?.revenue) || 0}</S.InfoDescription>
                        </S.RightInfoGridCard>
                        <S.RightInfoGridCard>
                          <S.InfoTitle>LUCRO</S.InfoTitle>
                          <S.InfoDescription>${formatCurrencyShort((Number(movie?.revenue) - Number(movie?.budget)).toString()) || 0}</S.InfoDescription>
                        </S.RightInfoGridCard>
                      </S.InfoGroupGrid>
                    </S.RightInfoGrid>
                  </S.DivInfosGrid>
                </S.InfosGrid>
              </S.ContentInfoSection>
            </S.InfoSection>

            {movie?.trailerUrl && extractYouTubeId(movie.trailerUrl) && (
              <S.TrailerWrapper>
                <span>Trailer</span>
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(movie.trailerUrl)}`}
                  title={`${movie?.title} trailer`}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </S.TrailerWrapper>
            )}
          </>
        }
      </S.Container>
    </Layout >
  );
};

export default MovieDetails;
