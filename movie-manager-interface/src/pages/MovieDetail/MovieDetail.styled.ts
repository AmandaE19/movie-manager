import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  color: #eee;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 12px #000a;
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  color: #ccc;
  margin-top: 0;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
  gap: 12px;
  margin-top: 16px;

  div {
    background: #222;
    padding: 12px;
    border-radius: 6px;
    text-align: center;

    strong {
      display: block;
      font-weight: 600;
      margin-bottom: 4px;
    }
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  margin-top: 16px;
  color: #ddd;
`;

export const Genres = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;

  span {
    background: #5a2dbd;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: default;
  }
`;

export const TrailerWrapper = styled.div`
  margin-top: 40px;
  iframe, video {
    width: 100%;
    height: 300px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    iframe, video {
      height: 200px;
    }
  }
`;