import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 348px;
  height: 506px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  .product-image {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 348px;
    height: 344.92px;

    background: ${(props) => props.theme.colors.neutral[0]};
    border: 1px solid ${(props) => props.theme.colors.neutral[200]};
    border-radius: 16px 16px 0px 0px;

    img {
      height: 204px;
      width: 280px;
    }
  }
  .product-detail {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 24px 24px;

    width: 348px;
    height: 88px;

    background: ${(props) => props.theme.colors.neutral[0]};
    border: 1px solid ${(props) => props.theme.colors.neutral[200]};
    border-radius: 0px 0px 16px 16px;

    .product-name {
      width: 300px;
      height: 27px;

      font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
      font-weight: ${(props) =>
        props.theme.typography.fontWeight.text.l1.desktop};
      line-height: ${(props) =>
        props.theme.typography.lineHeight.text.l1.desktop};
      color: ${(props) => props.theme.colors.neutral[900]};

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
    }

    .product-category {
      width: 300px;
      height: 21px;

      font-size: ${(props) => props.theme.typography.fontSize.text.l2.desktop};
      font-weight: ${(props) =>
        props.theme.typography.fontWeight.text.l2.desktop};
      line-height: ${(props) =>
        props.theme.typography.lineHeight.text.l2.desktop};

      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.neutral[600]};

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }
  }
`;

export const CTAButton = styled.div`
  width: 348px;
  height: 59px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  span {
    display: flex;
    align-items: center;
  }

  .default {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;

    width: 348px;
    height: 59px;

    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.text.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.text.l1.desktop};
    color: ${(props) => props.theme.colors.neutral[0]};

    background-image: linear-gradient(
      102.47deg,
      ${(props) => props.theme.colors.primary.default} -5.34%,
      ${(props) => props.theme.colors.secondary.default} 106.58%
    );

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    border: none;

    cursor: pointer;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  .processing {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;

    width: 348px;
    height: 59px;

    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.text.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.text.l1.desktop};
    color: ${(props) => props.theme.colors.neutral[0]};

    background-image: linear-gradient(
      102.47deg,
      ${(props) => props.theme.colors.sectionBG[1]} -5.34%,
      ${(props) => props.theme.colors.sectionBG[2]} 106.58%
    );

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    border: none;

    cursor: progress;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  .disabled {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;

    width: 348px;
    height: 59px;

    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.text.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.text.l1.desktop};
    color: ${(props) => props.theme.colors.neutral[600]};

    background: ${(props) => props.theme.colors.neutral[200]};

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    border: none;

    cursor: not-allowed;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`;

export const Button = styled.button``;
