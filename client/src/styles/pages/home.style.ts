import styled from 'styled-components';
import path from '../../assets/path.svg';

export const HomeContainer = styled.main`
  position: relative;
  width: 100vw;
  max-width: 1920px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.neutral[0]};
`;

export const LandingSection = styled.section`
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

  cursor: pointer;

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

export const WalkthroughSection = styled.section`
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
  background-repeat: repeat-y;
  z-index: 1;
`;

export const ProductSection = styled.section`
  position: absolute;
  height: auto;
  left: 0px;
  right: 0px;
  top: 1833px;
`;

export const ProductSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 64px;

  position: absolute;
  height: auto;
  left: 228px;
  right: 228px;
  top: 0px;
`;

export const ProductsHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  width: 1464px;
  height: 142px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  .title {
    width: 1464px;
    height: 38px;

    /* Desktop/Headings/L2/Default */
    font-size: ${(props) =>
      props.theme.typography.fontSize.headings.l2.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.headings.l2.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.headings.l2.desktop};
    text-transform: uppercase;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      102.47deg,
      ${(props) => props.theme.colors.primary.default} -5.34%,
      ${(props) => props.theme.colors.secondary.default} 106.58%
    );
    span {
      color: ${(props) => props.theme.colors.neutral[900]};
    }
  }
`;

export const ProductsNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 154px;

  width: 1464px;
  height: 64px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  .pager {
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`;

export const ProductsMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 40px;

  width: 1051px;
  height: 59px;

  flex: none;
  order: 0;
  flex-grow: 0;

  .bar {
    width: 2px;
    height: 59px;

    background: ${(props) => props.theme.colors.neutral[300]};

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const ProductsFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 353px;
  height: 59px;

  flex: none;
  order: 0;
  flex-grow: 0;

  font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
  font-weight: ${(props) => props.theme.typography.fontWeight.text.l1.desktop};
  line-height: ${(props) => props.theme.typography.lineHeight.text.l1.desktop};
  color: ${(props) => props.theme.colors.neutral[600]};

  p {
    width: 81px;
    height: 27px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const FilterSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 256px;
  height: 59px;

  font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
  font-weight: ${(props) => props.theme.typography.fontWeight.text.l1.desktop};
  line-height: ${(props) => props.theme.typography.lineHeight.text.l1.desktop};
  color: ${(props) => props.theme.colors.neutral[600]};

  flex: none;
  order: 1;
  flex-grow: 0;

  .select-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;

    width: 256px;
    height: 59px;

    background: ${(props) => props.theme.colors.neutral[0]};

    border: 1px solid ${(props) => props.theme.colors.neutral[300]};
    border-radius: 16px;

    cursor: pointer;

    flex: none;
    order: 0;
    flex-grow: 0;
    span {
      width: 113px;
      height: 27px;

      flex: none;
      order: 0;
      flex-grow: 0;
    }
    li {
      width: 16px;
      height: 16px;

      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }

  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0px;
    overflow-y: auto;
    overflow-x: hidden;

    position: absolute;
    width: 256px;
    height: 271px;
    left: calc(50% - 256px / 2 - 507px);
    top: 148px;

    background: ${(props) => props.theme.colors.neutral[0]};
    border: 1px solid ${(props) => props.theme.colors.neutral[300]};
    border-radius: 8px;

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    .option {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px 24px;
      gap: 16px;

      width: 256px;
      height: 51px;

      background: ${(props) => props.theme.colors.neutral[0]};

      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme.colors.neutral[100]};
      }
    }
  }
  .close {
    display: none;
  }
`;

export const ProductsSort = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 616px;
  height: 43px;

  flex: none;
  order: 2;
  flex-grow: 0;

  p {
    width: 71px;
    height: 27px;

    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.text.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.text.l1.desktop};
    color: ${(props) => props.theme.colors.neutral[600]};

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .sort-buttons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 529px;
    height: 43px;

    flex: none;
    order: 1;
    flex-grow: 0;


    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 24px;
      gap: 10px;

      width: 173px;
      height: 43px;

      background: ${(props) => props.theme.colors.light[1]};
      border-radius: 12px;
      border: none;

      font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
      font-weight: ${(props) =>
        props.theme.typography.fontWeight.text.l1.desktop};
      line-height: ${(props) =>
        props.theme.typography.lineHeight.text.l1.desktop};
      text-align: center;

      cursor: pointer;

      flex: none;
      order: 2;
      flex-grow: 0;
    }
    .selected {
      background-image: linear-gradient(
        102.47deg,
        ${(props) => props.theme.colors.primary.default} -5.34%,
        ${(props) => props.theme.colors.secondary.default} 106.58%
      );
      span {
        color: ${(props) => props.theme.colors.neutral[100]};
      }
    }
    .not-selected {
      background: ${(props) => props.theme.colors.light[1]};
      span {
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
  }
`;

export const ProductsList = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 80px 24px;
  flex-wrap: wrap;

  width: 1464px;
  height: auto;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ProductsEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 292px;

  width: 1464px;
  height: 64px;

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;

  .empty {
    width: 259px;
    height: 64px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .text {
    width: 156px;
    height: 27px;

    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.text.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.text.l1.desktop};
    color: ${(props) => props.theme.colors.neutral[600]};

    flex: none;
    order: 1;
    flex-grow: 0;

    span {
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
`;

export const Pager = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: auto;

  width: 259px;
  height: 64px;

  border: 1px solid ${(props) => props.theme.colors.neutral[300]};
  border-radius: 16px;

  flex: none;
  order: 1;
  flex-grow: 0;

  .prev {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 10px;

    width: 40px;
    height: 40px;

    background: ${(props) => props.theme.colors.neutral[200]};
    border-radius: 8px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .disabled {
    color: ${(props) => props.theme.colors.neutral[300]};
    cursor: not-allowed;
  }
  .enabled {
    color: ${(props) => props.theme.colors.neutral[500]};
    cursor: pointer;
  }
  .next {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 10px;

    width: 40px;
    height: 40px;

    background: ${(props) => props.theme.colors.light[1]};
    border-radius: 8px;

    flex: none;
    order: 2;
    flex-grow: 0;
  }
  .text {
    text-align: center;
    width: 128px;
    height: 27px;

    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.text.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.text.l1.desktop};
    color: ${(props) => props.theme.colors.neutral[600]};

    flex: none;
    order: 1;
    flex-grow: 0;
    span {
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
`;

interface Distance {
  // Agregar la propiedad "distance" al componente
  distance: string;
}
export const FooterSection = styled.div<Distance>`

position: absolute;
  height: 200px;
  width: 100vw;
  left: 0px;
  right: 0px;

  top: ${(props) => props.distance};

`;
