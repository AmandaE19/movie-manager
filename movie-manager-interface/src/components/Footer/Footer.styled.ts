import styled from "styled-components";

export const Container = styled.div`
  transition: all ease 0.2s;
  /* position: fixed; */
  bottom: 0px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid #F1E6FD19;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121113e6;

  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #B5B2BC;

  z-index: 2;

  span {
    white-space: nowrap;
  }

  @media (max-width: 600px) {
    text-align: center;

    span {
      white-space: normal;
    }
  }
`;

export const CompanyName = styled.span`
  font-weight: 600;
  margin-left: 5px;
  white-space: nowrap;
  color: #B5B2BC;
`;