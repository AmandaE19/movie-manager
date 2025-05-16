import styled from "styled-components";

export const Container = styled.div`
    transition: all ease 0.2s;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    padding: 16px 32px;
    border-bottom: 1px solid #F1E6FD30;
    background-color: #121113cc;
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
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #EEEEF0;
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

export const ThemeButton = styled.button`
    height: 44px;
    padding: 0 16px;
    border-radius: 4px;
    background-color: #B744F714;
    backdrop-filter: blur(4px);
    border: none;
    cursor: pointer;
    color: #EEEEF0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
    }
`;

export const LogoutButton = styled.button`
    height: 44px;
    padding: 0 20px;
    border-radius: 4px;
    background-color: #8E4EC6;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
`;
