import styled from "styled-components";
import type { RatingCircleProps } from "../../types/global";

export const Container = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin-top: 90px;

  @media (max-width: 900px) {
    transition: all ease 0.2s;
    display: flex;
    align-items: center;
  }

  @media (max-width: 540px) {
    transition: all ease 0.2s;
    display: flex;
    align-items: center;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  height: fit-content;
  padding: 32px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    transition: all ease 0.2s;
    display: flex;
    align-items: center;
  }

  @media (max-width: 540px) {
      transition: all ease 0.2s;
      display: flex;
      align-items: center;
    }
`;

export const HeaderInfoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 540px) {
    transition: all ease 0.2s;
    display: flex;
    flex-direction: column;
  }
`;

export const ContentInfoSection = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    transition: all ease 0.2s;
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    transition: all ease 0.2s;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media (max-width: 900px) {
    display: flex;
    padding: 16px 0px;
    flex-direction: column-reverse;
    transition: all ease 0.2s;
    
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    transition: all ease 0.2s;
  }
`;

export const TagLine = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 16px;
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
		content: '';
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
		color: #FFFFFF;
    
	}

  @media (max-width: 900px) {
    width: 70px;
    height: 70px;
    &::after {
      width: 64px;
      height: 64px;
    }
  }
`;

export const Info1 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
  height: 100%;

  & > ${RatingCircle} {
    min-width: 76px;
    min-height: 76px;
  }

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: all ease 0.2s;
  }
`;

export const Info2 = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  width: 60%;
  height: 100%;
  flex-direction: column;

  @media (max-width: 1224px) {
    transition: all ease 0.2s;
    width: 100%;

    div {
      gap: 4px;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all ease 0.2s;
  }
`;

export const Info3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 16px;
  height: 100%;

  div {
    display: flex;
    gap: 16px;
  }

  @media (max-width: 1224px) {
    width: 100%;
    height: fit-content;

    div {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all ease 0.2s;

    div {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      gap: 16px;
    }
  }

  @media (max-width: 540px) {
    width: 100%;
    height: fit-content;

    div {
      flex-wrap: wrap;
    }
  }

`;

export const ContainerInfo = styled.div`
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

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const TitleText = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mauve[11]};
`;

export const InfoDescriptionText = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mauve[12]};
`;

export const Genres = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
  background: #5a2dbd;

  span {
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: default;
  }

  @media (max-width: 900px) {
    width: 100%;
    transition: all ease 0.2s;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 900px) {
    display: block;
    transition: all ease 0.2s;
  }
`;

export const Poster = styled.img`
  width: 374px;
  height: 542px;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px 12px #00000020;
  object-fit: cover;

  @media (max-width: 900px) {
    transition: all ease 0.2s;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;

  @media (max-width: 540px) {
    display: flex;
    justify-content: center;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  color: #ccc;
  margin-top: 0;

  @media (max-width: 540px) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 540px) {
    display: flex;
    justify-content: center;
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  margin-top: 16px;
  color: #ddd;
`;

export const TrailerWrapper = styled.div`
  width: 100%;
  padding: 32px;

  iframe, video {
    width: 100%;
    height: 450px;
    border-radius: 8px;
  }
`;