import React from 'react';
import styled from 'styled-components';
import { shouldUseMock } from '../../services/mockApi';

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 10000;
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const ToggleButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive, theme }) => isActive ? theme.primary : 'transparent'};
  color: ${({ isActive, theme }) => isActive ? '#fff' : theme.text};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;

export const MockToggle: React.FC = () => {
  const isMockMode = shouldUseMock();

  const isDevelopment = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
  
  if (!isDevelopment) {
    return null;
  }

  return (
    <ToggleContainer>
      <span>Modo:</span>
      <ToggleButton 
        isActive={!isMockMode}
        onClick={() => {
          localStorage.setItem('useMockMode', 'false');
          window.location.reload();
        }}
      >
        Real API
      </ToggleButton>
      <ToggleButton 
        isActive={isMockMode}
        onClick={() => {
          localStorage.setItem('useMockMode', 'true');
          window.location.reload();
        }}
      >
        Mock
      </ToggleButton>
    </ToggleContainer>
  );
};
