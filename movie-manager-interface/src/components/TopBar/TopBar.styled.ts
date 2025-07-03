import styled from "styled-components";

export const Container = styled.div`
    transition: all ease 0.2s;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    padding: 16px 32px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mauveAlpha[6]};
    background-color: ${({ theme }) => theme.colors.mauve[1]}cc;
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
      padding: 12px 16px;
  }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.mauve[12]};
    }
`;


export const Logo = styled.img`
    width: 160px;
    height: 36px;
    

    @media (max-width: 600px) {
      width: fit-content;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 12px;
`;
