import React from "react";
import {
  LoadingOverlay,
  LoadingSpinner
} from "./Loading.styled";

interface LoadingProps {
  isVisible: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ 
  isVisible
}) => {
  if (!isVisible) return null;

  return (
    <LoadingOverlay>
      <LoadingSpinner />
    </LoadingOverlay>
  );
};
