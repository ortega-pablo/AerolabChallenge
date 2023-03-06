import styled from 'styled-components';

export const NavbarContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;

  position: absolute;
  height: 128px;
  width: 95vw;
  max-width: 1464px;

  left: 50%;
  transform: translate(-50%, 0%);

  background-color: ${(props) => props.theme.colors.neutral[0]};
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    height: 28px;
  }

  p {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      180deg,
      ${(props) => props.theme.colors.aerolab[1]} 0%,
      ${(props) => props.theme.colors.aerolab[2]} 100%
    );
    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};

    @media (max-width: ${(props) => props.theme.breakpoints.extraLarge}) {
      display: none;
    }
  }
`;

export const AeroCoins = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
  width: 172px;
  height: 48px;

  background: ${(props) => props.theme.colors.neutral[0]};
  border: 1px solid ${(props) => props.theme.colors.neutral[300]};
  box-shadow: 0px 2px 12px ${(props) => props.theme.colors.neutral[100]};
  border-radius: 16px;

  flex: none;
  order: 1;
  flex-grow: 0;

  cursor: pointer;

  .points {
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      height: 32px;
      margin-right: 8px;
    }

    p {
      font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
      font-weight: ${(props) =>
        props.theme.typography.fontWeight.text.l1.desktop};
      line-height: ${(props) =>
        props.theme.typography.lineHeight.text.l1.desktop};

      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: linear-gradient(
        102.47deg,
        ${(props) => props.theme.colors.primary.default} -5.34%,
        ${(props) => props.theme.colors.secondary.default} 106.58%
      );
    }
  }

  span {
    height: 32px;
    color: ${(props) => props.theme.colors.neutral[500]};
  }
`;
