import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  min-height: 100vh;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral[0]};
  border: 2px solid ${(props) => props.theme.colors.neutral[300]};
  flex: none;
`;
