import styled from 'styled-components';

export const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 676px;
  width: 532px;
  padding: 12px;

  background-color: ${(props) => props.theme.colors.neutral[0]};
  border: 1px solid ${(props) => props.theme.colors.neutral[300]};
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
`;

export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 508px;
  height: 498px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

export const IllustrationIMG = styled.div`
  width: 508px;
  height: 498px;

  background: linear-gradient(
    102.47deg,
    ${(props) => props.theme.colors.illustrationBG[1]} -5.34%,
    ${(props) => props.theme.colors.illustrationBG[2]} 106.58%,
    ${(props) => props.theme.colors.illustrationBG[2]} 106.58%
  );

  border: 1px solid ${(props) => props.theme.colors.neutral[300]};
  border-radius: 24px 24px 0px 0px;

  img {
    height: 100%;
  }
`;

export const BottomCard = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 24px 24px;
  gap: 12px;

  width: 508px;
  height: 154px;

  background: ${(props) => props.theme.colors.neutral[0]};

  border: 1px solid ${(props) => props.theme.colors.neutral[300]};
  border-radius: 0px 0px 24px 24px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const TitleAndIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 262px;
  height: 48px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
  gap: 2px;

  width: 48px;
  height: 48px;

  background: ${(props) => props.theme.colors.light[1]};
  border-radius: 8px;

  flex: none;
  order: 0;
  flex-grow: 0;

  img {
    background: none;
    border: none;
    height: 32.5px;
    width: 32.5px;
  }
`;

export const Title = styled.div`
  width: 250px;
  height: 32px;

  font-size: ${(props) => props.theme.typography.fontSize.headings.l3.desktop};
  font-weight: ${(props) =>
    props.theme.typography.fontWeight.headings.l3.desktop};
  line-height: ${(props) =>
    props.theme.typography.lineHeight.headings.l3.desktop};
  text-transform: uppercase;

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    102.47deg,
    ${(props) => props.theme.colors.primary.default} -5.34%,
    ${(props) => props.theme.colors.secondary.default} 106.58%
  );

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CardParagraph = styled.div`
  width: 372px;
  height: 54px;

  font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
  font-weight: ${(props) => props.theme.typography.fontWeight.text.l1.desktop};
  line-height: ${(props) => props.theme.typography.lineHeight.text.l1.desktop};

  color: ${(props) => props.theme.colors.neutral[600]};

  flex: none;
  order: 1;
  flex-grow: 0;
`;
