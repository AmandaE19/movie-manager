import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mauve[11]}80;
  filter: blur(4);
  z-index: 21;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.mauve[3]};
  width: fit-content;
  height: fit-content;
  padding: 16px;
  gap: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    :last-child {
      cursor: pointer;
    }
`;

export const FilterOptions = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: end;
    padding: 0px 16px 16px 0px;
    gap: 16px;
`; 