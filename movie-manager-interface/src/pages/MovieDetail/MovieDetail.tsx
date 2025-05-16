import * as S from "./MovieDetail.styled";

import Button from "../../components/Button/Button";

import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";

interface Movie {
  title: string;
  originalTitle: string;
  posterUrl: string;
  popularity: string;
  votes: string;
  rating: number;
  synopsis: string;
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
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    setMovie(
      {
        title: "Bumblebee",
        originalTitle: "Título original: Bumblebee",
        posterUrl: "url-da-imagem.jpg",
        popularity: "42.595",
        votes: "5704",
        rating: 67,
        synopsis: "Sinopse do filme...",
        genres: ["Ação", "Aventura", "Ficção Científica"],
        releaseDate: "12/20/2018",
        duration: "1h 53m",
        status: "Lançado",
        language: "Inglês",
        budget: "$135M",
        revenue: "$467.99M",
        profit: "$332.99M",
        trailerUrl: "https://www.youtube.com/embed/7B4b8lnieHY"
      }
    );
  }, [])

  return (
    <Layout>
        <S.Container>
          <S.Poster src={movie?.posterUrl} alt={movie?.title} />
          <S.Poster alt="Poster" />

          <S.InfoSection>
            <S.Title>Titulo</S.Title>
            <S.Subtitle>Titulo Original</S.Subtitle>
            {/* <S.Title>{movie?.title}</S.Title>
          <S.Subtitle>{movie?.originalTitle}</S.Subtitle> */}

            <S.ButtonsRow>
              <Button>Deletar</Button>
              <Button>Editar</Button>
            </S.ButtonsRow>

            <S.StatsGrid>
              <div>
                <strong>Popularidade</strong>
                {movie?.popularity}
              </div>
              <div>
                <strong>Votos</strong>
                {movie?.votes}
              </div>
              <div>
                <strong>Avaliação</strong>
                {movie?.rating}%
              </div>
            </S.StatsGrid>

            <S.Description>{movie?.synopsis}</S.Description>
            <S.Description>Sinopse</S.Description>

            <S.Genres>
              {movie?.genres.map(g => (
              <span key={g}>{g}</span>
            ))}
            </S.Genres>

            <S.StatsGrid style={{ marginTop: "20px" }}>
              <div>
                <strong>Lançamento</strong>
                {movie?.releaseDate}
              </div>
              <div>
                <strong>Duração</strong>
                {movie?.duration}
              </div>
              <div>
                <strong>Situação</strong>
                {movie?.status}
              </div>
              <div>
                <strong>Idioma</strong>
                {movie?.language}
              </div>
              <div>
                <strong>Orçamento</strong>
                {movie?.budget}
              </div>
              <div>
                <strong>Receita</strong>
                {movie?.revenue}
              </div>
              <div>
                <strong>Lucro</strong>
                {movie?.profit}
              </div>
            </S.StatsGrid>

            <S.TrailerWrapper>
              <iframe
                src={movie?.trailerUrl}
                title={`${movie?.title} trailer`}
                frameBorder="0"
                allowFullScreen
              />
            </S.TrailerWrapper>
          </S.InfoSection>
        </S.Container>
    </Layout>
  );
};

export default MovieDetails;
