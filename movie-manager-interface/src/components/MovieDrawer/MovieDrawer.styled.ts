import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    z-index: 21;
`;

export const Overlay = styled.div`
    position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.mauve[11]}25;
	z-index: 21;
`;

export const Drawer = styled.div`
    position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	max-width: 480px;
    height: 100vh;
	background-color: ${({ theme }) => theme.colors.mauve[3]};
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
	z-index: 100;
	display: flex;
	flex-direction: column;
	padding: 24px;
    overflow-y: auto;
    scroll-behavior: smooth;
    
	animation: slideIn 0.3s ease forwards;

	@keyframes slideIn {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;

	h2 {
		font-size: 20px;
        color: ${({ theme }) => theme.colors.button?.primary.text[1]};
	}
	button {
		font-size: 24px;
		background: none;
		border: none;
		cursor: pointer;
        color: ${({ theme }) => theme.colors.button?.primary.text[1]};
        
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	input {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
`;

export const Footer = styled.div`
	margin-top: 25px;
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;
