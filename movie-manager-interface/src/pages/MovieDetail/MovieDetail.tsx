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
  }, [])

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
                  <S.Title>{movie?.title || ""}</S.Title>
                  <S.Subtitle>{movie?.originalTitle || ""}</S.Subtitle>
                </div>
                <S.ButtonsRow>
                  <Button
                    variant="secondary"
                    onClick={() => setIsDeleteOpen(true)}
                  >Deletar</Button>
                  <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>Editar</Button>
                </S.ButtonsRow>
              </S.HeaderInfoSection>

              <S.ContentInfoSection>
                <S.Poster src={movie?.posterUrl || ""} alt="Poster do filme" />

                <S.Section>
                  <S.SectionHeader>
                    <S.TagLine>
                      {movie?.tagline}
                    </S.TagLine>

                    <S.Info1>
                      <S.ContainerInfo>
                        <S.TitleText>POPULARIDADE</S.TitleText>
                        <S.InfoDescriptionText>{formatStringToFloat(movie?.popularity) || ""}</S.InfoDescriptionText>
                      </S.ContainerInfo>
                      <S.ContainerInfo>
                        <S.TitleText>VOTOS</S.TitleText>
                        <S.InfoDescriptionText>{formatStringToFloat(movie?.voteCount) || ""}</S.InfoDescriptionText>
                      </S.ContainerInfo>
                      <S.RatingCircle percentage={formatStringToFloat(movie?.rating) || 0 * 10}>
                        <span>{Number(movie?.rating || 0) * 10}<span className="percentage">%</span></span>
                      </S.RatingCircle>
                    </S.Info1>
                  </S.SectionHeader>

                  <S.SectionContent>
                    <S.Info2>
                      <S.ContainerInfo>
                        <S.TitleText>SINOPSE</S.TitleText>
                        <S.InfoDescriptionText className="description">{movie?.description || ""}</S.InfoDescriptionText>
                      </S.ContainerInfo>


                      <S.ContainerInfo>
                        <S.TitleText>Generos</S.TitleText>
                        {movie.genres &&
                          <S.Genres>
                            {movie.genres.split(",").map((genre) => (
                              <S.GenreInfo>{genre}</S.GenreInfo>
                            ))}
                          </S.Genres>
                        }
                      </S.ContainerInfo>

                    </S.Info2>

                    <S.Info3 style={{ marginTop: "20px" }}>
                      <div>
                        <S.ContainerInfo>
                          <S.TitleText>Lançamento</S.TitleText>
                          <S.InfoDescriptionText>{formatDate(movie?.releaseDate) || ""}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                          <S.TitleText>Duração</S.TitleText>
                          <S.InfoDescriptionText>{formatMinutes(movie?.duration) || ""}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                      </div>
                      <div>
                        <S.ContainerInfo>
                          <S.TitleText>Situação</S.TitleText>
                          <S.InfoDescriptionText>{movie?.status || handleStatus(movie.releaseDate)}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                          <S.TitleText>Idioma</S.TitleText>
                          <S.InfoDescriptionText>{movie?.language || ""}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                      </div>
                      <div>
                        <S.ContainerInfo>
                          <S.TitleText>Orçamento</S.TitleText>
                          <S.InfoDescriptionText>${formatCurrencyShort(movie?.budget) || 0}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                          <S.TitleText>Receita</S.TitleText>
                          <S.InfoDescriptionText>${formatCurrencyShort(movie?.revenue) || 0}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                          <S.TitleText>Lucro</S.TitleText>
                          <S.InfoDescriptionText>${formatCurrencyShort((Number(movie?.revenue) - Number(movie?.budget)).toString()) || 0}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                      </div>
                    </S.Info3>
                  </S.SectionContent>
                </S.Section>
              </S.ContentInfoSection>
            </S.InfoSection>

            {movie?.trailerUrl !== "" &&
              <S.TrailerWrapper>
                <span>Trailer</span>
                <iframe
                  src={`https://www.youtube.com/embed/${movie?.trailerUrl.split("?")[1].replace("v=", "")}` || ""}
                  title={`${movie?.title} trailer`}
                  frameBorder="0"
                  allowFullScreen
                />
              </S.TrailerWrapper>
            }
          </>
        }
      </S.Container>
    </Layout>
  );
};

export default MovieDetails;
