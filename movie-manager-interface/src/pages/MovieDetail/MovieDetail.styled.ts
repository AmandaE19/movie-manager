import styled from "styled-components";
import type { CardProps, RatingCircleProps } from "../../types/global";

export const Container = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin-top: 90px;

  @media (max-width: 1450px) {
    padding: 16px;
    transition: all ease 0.2s;
  }
  
  @media (max-width: 1024px) {
    
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    transition: all ease 0.2s;
  }

  @media (max-width: 480px) {
      
  }
`;

export const InfoSection = styled.div<CardProps>`
  background: 
    linear-gradient(to bottom, ${({ theme }) => theme.colors.mauve[1]}, ${({ theme }) => theme.colors.mauve[1]}46, ${({ theme }) => theme.colors.mauve[1]}),
    ${({ imageBg }) => `url(${imageBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: fit-content;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1450px) {
    width: 98%;
    padding: 16px;
    transition: all ease 0.2s;
  }

  @media (max-width: 1024px) {
    padding: 16px;
    background: none;
    transition: all ease 0.2s;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    transition: all ease 0.2s;
  }

  @media (max-width: 480px) {
    padding: 12px;    
  }
`;

export const HeaderInfoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 1450px) {
    gap: 16px;
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    transition: all ease 0.2s;
  }
  
  @media (max-width: 480px) {
    text-align: center;
    flex-direction: column-reverse;
    gap: 8px;
  }
`;

export const MobileHeaderInfoSection = styled(HeaderInfoSection)`
  display: none;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    order: 2;
  }
`;

export const ContentInfoSection = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: flex-start;

  > div:first-child {
    width: 20%;
  }

  > div:last-child {
    width: 80%;
  }
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1;

    > div:first-child {
      width: 100%;  
    }

    > div:last-child {
      width: 100%;
    }
  }
`;

export const Poster = styled.img`
  width: 374px;
  height: 542px;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px 12px #00000020;
  object-fit: cover;

  @media (max-width: 1450px) {
    width: 100%;
    max-width: 374px;
    height: auto;
    transition: all ease 0.2s;
  }

  @media (max-width: 1024px) {
    order: 1;
  }
`;

export const InfosGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1450px) {
    gap: 16px;
  }

  @media (max-width: 1024px) {
    order: 3;
  }

  @media (max-width: 748px) {
    gap: 12px;
  }
`;

export const HeaderContentInfoSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  
  @media (max-width: 1450px) {
    gap: 14px;
  }
  
  @media (max-width: 1024px) {
    gap: 12px;   
    flex-direction: column-reverse;
    order: 1;
  }
`;

export const DivInfosGrid = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media (max-width: 1450px) {
    gap: 12px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 12px;
    order: 2;
  }

  @media (max-width: 748px) {
    gap: 8px;
  }
`;

export const LeftInfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
  
  @media (max-width: 1024px) {
    order: 1;
    width: 100%;
  }
`;

export const LeftInfoGridCard = styled.div`
  width: 100%;
  min-width: 150px;
  max-width: 100%;
  height: fit-content;
  border-radius: 4px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.mauve[3]}BF;
  backdrop-filter: blur(4px);
  gap: 8px;

  line-height: 100%;
  letter-spacing: 0px;
  font-family: "Montserrat", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all ease 0.2s;

  @media (max-width: 1450px) {
    width: 100%;
    text-align: center;
    flex: 1;
    min-width: 120px;
  }

  @media (max-width: 1024px) {
    max-width: none;
  }
`;

export const RightInfoGrid = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 20px;
  text-align: left;
    
  @media (max-width: 1024px) {
    order: 2;
    width: 100%;
  }

  @media (max-width: 748px) {
    gap: 12px;
  }
`;

export const RightInfoGridCard = styled.div`
  flex: 1;
  min-width: 150px;
  height: fit-content;
  border-radius: 4px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.mauve[3]}BF;
  backdrop-filter: blur(4px);
  gap: 8px;

  line-height: 100%;
  letter-spacing: 0px;
  font-family: "Montserrat", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all ease 0.2s;

  @media (max-width: 1450px) {
    width: 100%;
    max-width: 300px;
    text-align: center;
    flex: 1;
    min-width: 120px;
  }

  @media (max-width: 1024px) {
    max-width: none;
  }
`;

export const InfoGroupGrid = styled.div`
  display: flex;
  align-items: stretch;
  gap: 10px;
  width: 100%;

  @media (max-width: 1450px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    width: 100%;
  }

  @media (max-width: 748px) {
    gap: 8px;
  }

  /* Ordem específica para mobile */
  &:first-child {
    @media (max-width: 1450px) {

    }
  }

  &:nth-child(2) {
    @media (max-width: 1450px) {

    }
  }

  &:nth-child(3) {
    @media (max-width: 1450px) {

    }
  }

  &:nth-child(4) {
    @media (max-width: 1450px) {

    }
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;

  @media (max-width: 1450px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ContainerInfoHeader = styled.div`
  width: auto;
  min-width: 150px;
  max-width: 100%;
  height: fit-content;
  border-radius: 4px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.mauve[3]}BF;
  backdrop-filter: blur(4px);
  gap: 8px;

  line-height: 100%;
  letter-spacing: 0px;
  font-family: "Montserrat", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all ease 0.2s;

  @media (max-width: 1450px) {
    width: 100%;
    max-width: 300px;
    text-align: center;
    flex: 1;
    min-width: 120px;
  }

  @media (max-width: 1024px) {
    max-width: none;
  }
`;

export const MovieTagline = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 16px;
  text-align: center;

  @media (max-width: 1450px) {
    width: 100%;
    justify-content: center;
    padding: 8px 16px;
  }
`;

export const RatingCircle = styled.div<RatingCircleProps>`
  width: 98px;
	height: 98px;
	border-radius: 50%;
	background: ${({ percentage }) => `
		conic-gradient(
    #FFE000 ${percentage * 3.6}deg,
		  #ffffff40 ${percentage * 3.6}deg
		)
	`};
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	&::after {
		content: "";
		position: relative;
		width: 86px;
		height: 86px;
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.mauve[3]};
		backdrop-filter: blur(4px);
    z-index: 19;
	}

  span {
    position: absolute;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #FFE000;
    z-index: 20;
  }

  span:first-child {
		font-size: 20px;
		color: #FFE000;
	}

	span .percentage {
		font-size: 12px;
		color: ${({ theme }) => theme.text};
    transform: translateY(7px);
	}

  @media (max-width: 1450px) {
    width: 70px;
    height: 70px;
    &::after {
      width: 64px;
      height: 64px;
    }
  }
`;

export const InfoTitle = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mauve[11]};
`;

export const InfoDescription = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mauve[12]};

  &.description {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 100%;
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 1450px) {
    width: 100%;
    justify-content: center;
    transition: all ease 0.2s;
  }
`;

export const GenreTag = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  border-radius: 2px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.purpleAlpha[3]};

  span {
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: default;
  }

  @media (max-width: 1450px) {
    padding: 16px;
    transition: all ease 0.2s;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;

  @media (max-width: 1450px) {
    text-align: center;
  }

  @media (max-width: 748px) {
    font-size: 1.75rem;
  }
`;

export const MovieSubtitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  color: #ccc;
  margin-top: 0;

  @media (max-width: 1450px) {
    text-align: center;
  }

  @media (max-width: 748px) {
    font-size: 1.1rem;
  }
`;

export const ActionsButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 1450px) {
    justify-content: center;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 748px) {
    gap: 8px;
    flex-wrap: wrap;
  }
`;

export const TrailerWrapper = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  iframe, video {
    width: 100%;
    height: 450px;
    border-radius: 8px;
  }

  span {
    font-size: 24px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    line-height: 100%;
    letter-spacing: 0px;
  }

  @media (max-width: 1450px) {
    padding: 16px;
    text-align: center;

    iframe, video {
      height: 300px;
    }

    span {
      font-size: 20px;
    }
  }

  @media (max-width: 748px) {
    padding: 12px;

    iframe, video {
      height: 200px;
    }

    span {
      font-size: 18px;
    }
  }
`;

export const DeleteContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mauve[11]}25;
  z-index: 21;
`;

export const ContentDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.mauve[3]};
  width: fit-content;
  height: fit-content;
  padding: 32px;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};

  div {
    display: flex;
    justify-content: space-between;
  }
`;