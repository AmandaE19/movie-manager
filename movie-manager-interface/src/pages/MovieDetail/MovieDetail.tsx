import * as S from "./MovieDetail.styled";

import Button from "../../components/Button/Button";

import Layout from "../../components/Layout/Layout";

import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { deleteMovie, getOneMovies } from "../../services/api";
import type { Movie } from "../../types/global";
import AddMovieDrawer from "../../components/MovieDrawer/MovieDrawer";

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
              <Button variant="secondary" onClick={() => setIsDeleteOpen(false)}>Cancelar</Button>
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
                  <Button variant="secondary" onClick={() => setIsDeleteOpen(true)}>Deletar</Button>
                  <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>Editar</Button>
                </S.ButtonsRow>
              </S.HeaderInfoSection>

              <S.ContentInfoSection>
                <S.Poster src={movie?.posterUrl || ""} alt={movie?.title} />

                <S.Section>
                  <S.SectionHeader>
                    <S.TagLine>
                      {movie?.tagline}
                    </S.TagLine>

                    <S.Info1>
                      <S.ContainerInfo>
                        <S.TitleText>POPULARIDADE</S.TitleText>
                        <S.InfoDescriptionText>{movie?.popularity || ""}</S.InfoDescriptionText>
                      </S.ContainerInfo>
                      <S.ContainerInfo>
                        <S.TitleText>VOTOS</S.TitleText>
                        <S.InfoDescriptionText>{movie?.voteCount || ""}</S.InfoDescriptionText>
                      </S.ContainerInfo>
                      <S.RatingCircle percentage={Number(movie?.rating || 0) * 10}>
                        <span>{Number(movie?.rating || 0) * 10}<span className="percentage">%</span></span>
                      </S.RatingCircle>
                    </S.Info1>
                  </S.SectionHeader>

                  <S.SectionContent>
                    <S.Info2>
                      <S.ContainerInfo>
                        <S.TitleText>SINOPSE</S.TitleText>
                        <S.InfoDescriptionText>{movie?.description || ""}</S.InfoDescriptionText>
                      </S.ContainerInfo>


                      <S.ContainerInfo>
                        <S.TitleText>Generos</S.TitleText>
                        <S.Genres>
                          {movie.genres.split(",").map((genre) => (
                            <S.GenreInfo>{genre}</S.GenreInfo>
                          ))}
                        </S.Genres>
                      </S.ContainerInfo>

                    </S.Info2>

                    <S.Info3 style={{ marginTop: "20px" }}>
                      <div>
                        <S.ContainerInfo>
                          {/* Fazer função para tratar data */}
                          <S.TitleText>Lançamento</S.TitleText>
                          <S.InfoDescriptionText>{movie?.releaseDate.split(" ")[0] || ""}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                          {/* Fazer função para tratar tempo */}
                          <S.TitleText>Duração</S.TitleText>
                          <S.InfoDescriptionText>{movie?.duration || ""}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                      </div>
                      <div>
                        <S.ContainerInfo>
                          <S.TitleText>Situação</S.TitleText>
                          {/* Se não tiver status fazer o calculo com date e verificar */}
                          <S.InfoDescriptionText>{movie?.status || ""}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                          <S.TitleText>Idioma</S.TitleText>
                          <S.InfoDescriptionText>{movie?.language || ""}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                      </div>
                      <div>
                        {/* Fazer função para tratar moedas */}
                        <S.ContainerInfo>
                          <S.TitleText>Orçamento</S.TitleText>
                          <S.InfoDescriptionText>${movie?.budget || 0}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                          <S.TitleText>Receita</S.TitleText>
                          <S.InfoDescriptionText>${movie?.revenue || 0}</S.InfoDescriptionText>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                          <S.TitleText>Lucro</S.TitleText>
                          <S.InfoDescriptionText>${(Number(movie?.revenue) - Number(movie?.budget)) || 0}</S.InfoDescriptionText>
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
