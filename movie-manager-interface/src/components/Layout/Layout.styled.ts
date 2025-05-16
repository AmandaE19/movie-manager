import styled from "styled-components";

import BackgroundImg from "../../assets/images/background.png";

export const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const Background = styled.div`
  position: fixed;
  top: -180px;
  left: 0;
  width: 100%;
  height: 860px;
  opacity: 0.4;

  background: 
    linear-gradient(to bottom, #121113, #12111346, #121113),
    url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MainContent = styled.main`
	position: relative;
	flex: 1;
	display: flex;
`;
