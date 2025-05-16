import styled from "styled-components";

interface CardProps {
    imageBg: string;
}

export const Container = styled.div`
    height: fit-content;
    min-height: 100dvh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 90px 16px;
`;

export const FiltersBar = styled.div`
  width: 100%;
  height: fit-content;
  padding: 24px 16px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 10px;
  
  > div {
    max-width: 488px;
    width: 100%;
    
    input {
      width: 100%;
      max-width: 100%;
    }
  }

  > div, button {
    justify-self: end;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap: 12px;

    > div {
      max-width: 100%;
      width: 100%;
      grid-column: 1 / 2;
      justify-self: end;
    }

    button {
      grid-column: span 1;
      justify-self: end;
    }
  }
`;

export const Movies = styled.div`
    width: 98%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
    gap: 24px;
    padding: 24px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.mauveAlpha[3]};
    align-self: center;
    justify-content: center;
`;

export const Card = styled.div<CardProps>`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 355px;
  border-radius: 4px;
  overflow: hidden;
  background-image: ${({ imageBg }) => `url(${imageBg})`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .hover-element {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover .hover-element {
    opacity: 1;
  }

  &:hover .title {
    transform: translateY(-4px);
  }
`;

export const Info = styled.div`
    width: 100%;
    max-width: 300px;
    height: 157px;
    padding: 16px;
    gap: 4px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-family: "Montserrat", sans-serif;

    .title {
        width: 100%;
        color: #EEEEEE;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0px;
        transition: transform 0.2s ease;
    }

    .genre {
        color: #B4B4B4;
        font-size: 12.8px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0px;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    ${Card}:hover & .genre {
        opacity: 1;
    }

    ${Card}:hover & .title {
        transform: translateY(-4px);
    }
`;

export const MovieLoading = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 6px solid #FFE000;
    background-color: #00000050;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFE000;
    font-weight: 700;
    font-size: 24px;

    span {
        font-size: 24px;
        font-weight: 700;
    }

    sup {
        font-size: 14px;
        font-weight: 400;
        margin-left: 2px;
    }
`;

export const Pagination = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 24px;
    gap: 12px;
    align-self: center;

    button {
        margin-right: 8px;
    }
`;