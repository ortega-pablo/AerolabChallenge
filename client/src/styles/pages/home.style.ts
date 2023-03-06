import styled from 'styled-components';
import path from '../../assets/path.svg'

export const HomeContainer = styled.main`
  position: relative;
  width: 100vw;
  max-width: 1920px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.neutral[0]};
`;

export const LandingSection = styled.div`
  position: absolute;
  height: 920px;
  left: 0;
  right: 0;
  top: 0;
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;

  position: absolute;
  width: 602px;
  height: 577px;
  left: 228px;
  top: 240px;

  z-index: 1;
`;

export const LandingCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 602px;
  height: 433px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const LabelAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 602px;
  height: 355px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  .explore {
    height: 27px;

    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.text.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.text.l1.desktop};
    color: ${(props) => props.theme.colors.neutral[600]};
    line-height: 150%;
    letter-spacing: 0.24em;
    text-transform: uppercase;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .tech-zone {
    width: 602px;
    height: 320px;

    font-size: ${(props) =>
      props.theme.typography.fontSize.headings.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.headings.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.headings.l1.desktop};
    line-height: 80%;
    text-transform: uppercase;

    flex: none;
    order: 1;
    flex-grow: 0;

    .color {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: linear-gradient(
        102.47deg,
        ${(props) => props.theme.colors.primary.default} -5.34%,
        ${(props) => props.theme.colors.secondary.default} 106.58%
      );
    }

    .black {
      color: ${(props) => props.theme.colors.neutral[900]};
    }
  }
`;

export const LandingResume = styled.div`
  width: 523px;
  height: 54px;

  font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
  font-weight: ${(props) => props.theme.typography.fontWeight.text.l1.desktop};
  line-height: ${(props) => props.theme.typography.lineHeight.text.l1.desktop};
  line-height: 150%;
  color: ${(props) => props.theme.colors.neutral[600]};

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CTAButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 318px;
  height: 80px;
  border-radius: 24px;
  border: none;

  background-image: linear-gradient(
    102.47deg,
    ${(props) => props.theme.colors.primary.default} -5.34%,
    ${(props) => props.theme.colors.secondary.default} 106.58%
  );

  font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
  font-weight: ${(props) => props.theme.typography.fontWeight.text.l1.desktop};
  line-height: ${(props) => props.theme.typography.lineHeight.text.l1.desktop};
  color: ${(props) => props.theme.colors.neutral[0]};
  line-height: 150%;
  text-transform: uppercase;
  text-align: center;

  flex: none;
  order: 1;
  flex-grow: 0;

  p {
    margin-right: 8px;
  }
`;

export const IllustrationContainer = styled.div`
  position: absolute;
  width: 897px;
  height: 795px;
  right: 141px;
  top: 45px;

  z-index: 1;
`;

export const Illustration = styled.div`
  img {
    position: absolute;
    width: 897px;
    height: 795px;
    left: 0px;
    top: 0px;
    z-index: 2;
  }
`;

export const IllustrationBG = styled.div`
  position: absolute;
  width: 722px;
  height: 600px;
  left: 88px;
  top: 195px;

  background-image: linear-gradient(
    102.47deg,
    ${(props) => props.theme.colors.sectionBG[1]} -5.34%,
    ${(props) => props.theme.colors.sectionBG[2]} 106.58%
  );

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 104px;
`;

export const WalkthroughSection = styled.div`
  position: absolute;
  height: 721px;
  left: 0px;
  right: 0px;
  top: 952px;

  z-index: 1;
`;

export const WalkthroughCards = styled.div`
  position: absolute;
  height: 721px;
  left: 228px;
  right: 228px;
  top: calc(50% - 721px / 2);
  z-index: 2;

  .left {
    position: absolute;
    width: 532px;
    height: 676px;
    left: 0px;
    top: 45.84px;
    transform: rotate(-3deg);
  }

  .center {
    position: absolute;
    width: 532px;
    height: 676px;
    left: calc(50% - 532px / 2 + 0.32px);
    top: 0px;
  }

  .right {
    position: absolute;
    width: 532px;
    height: 676px;
    right: -0.38px;
    top: 18.54px;
    transform: rotate(3deg);
  }
`;

export const WalkthroughCardsBG = styled.div`
  position: absolute;
  height: 528px;
  left: 0px;
  right: 0px;
  top: calc(50% - 528px / 2 + 21.5px);

  background-image: linear-gradient(
    102.47deg,
    ${(props) => props.theme.colors.sectionBG[1]} -5.34%,
    ${(props) => props.theme.colors.sectionBG[2]} 106.58%
  );
`;

export const WavePattern = styled.div`
  position: absolute;
  width: 2182px;
  height: 1364px;
  top: 201px;
  color: blue;

  background-image: url('src/assets/path.svg');
  z-index: 1;
`;
