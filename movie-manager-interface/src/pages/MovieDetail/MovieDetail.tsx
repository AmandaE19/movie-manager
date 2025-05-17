import * as S from "./MovieDetail.styled";

import Button from "../../components/Button/Button";

import Layout from "../../components/Layout/Layout";

import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { getOneMovies } from "../../services/api";

interface Movie {
  title: string;
  originalTitle: string;
  tagline: string;
  posterUrl: string;
  popularity: string;
  voteCount: string;
  rating: number;
  description: string;
  genres: string[];
  releaseDate: string;
  duration: string;
  status: string;
  language: string;
  budget: string;
  revenue: string;
  profit: string;
  trailerUrl: string;
}

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

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

  // console.log(movie)
  return (
    <Layout>
      <S.Container>
        {movie &&
          <>
            <S.InfoSection>
              <S.HeaderInfoSection>
                <div>
                  <S.Title>{movie?.title || ""}</S.Title>
                  <S.Subtitle>{movie?.originalTitle || ""}</S.Subtitle>
                </div>
                <S.ButtonsRow>
                  <Button variant="secondary">Deletar</Button>
                  <Button variant="primary">Editar</Button>
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
                      <S.RatingCircle percentage={Number(movie?.rating) || 0}>
                        <span>{movie?.rating || 0}<span className="percentage">%</span></span>
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
                        <S.Genres>{movie?.genres || ""}</S.Genres>
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
                Trailer
                <iframe
                  src={movie?.trailerUrl || ""}
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
