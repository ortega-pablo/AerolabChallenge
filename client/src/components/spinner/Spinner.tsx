import React from 'react';
import styled, { keyframes } from 'styled-components';


const SpinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid ${props => props.theme.colors.primary.default};
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${SpinnerAnimation} 0.8s linear infinite;
`;

const Spinner: React.FC = () => {
  return <SpinnerWrapper />;
};

export default Spinner;