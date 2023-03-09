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
  z-index: 3;

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

  .closed {
    display:none
  }
  .button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
}
`;

export const AddPoints = styled.div`
  position: absolute;
  width: 312px;
  height: 404px;
  right: 0px;
  top: 96px;
  cursor: default;

  background: ${(props) => props.theme.colors.neutral[0]};
  /* Elevation 1/Hover & active */

  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;

  .header {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 24px;
    gap: 10px;

    position: absolute;
    height: 59px;
    left: 0px;
    right: 0px;
    top: 0px;

    border: 1px solid ${(props) => props.theme.colors.neutral[300]};
    border-radius: 16px 16px 0px 0px;

    p {
      width: 264px;
      height: 27px;

      font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
      font-weight: ${(props) =>
        props.theme.typography.fontWeight.text.l1.desktop};
      line-height: ${(props) =>
        props.theme.typography.lineHeight.text.l1.desktop};
      color: ${(props) => props.theme.colors.neutral[900]};

      flex: none;
      order: 0;
      flex-grow: 1;
    }
  }

  .content {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px;
    gap: 10px;

    position: absolute;
    left: 0px;
    right: 0px;
    top: 58px;
    bottom: 0px;

    border: 1px solid ${(props) => props.theme.colors.neutral[300]};
    border-radius: 0px 0px 16px 16px;

    .card-amount {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 10px;

      width: 264px;
      height: 298px;

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 1;

      .aerocard {
        width: 264px;
        height: 148px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 24px;

        background-color: ${(props) => props.theme.colors.neutral[900]};
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
        border-radius: 8px;

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;

        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;

          font-size: ${(props) =>
            props.theme.typography.fontSize.text.l1.desktop};
          font-weight: ${(props) =>
            props.theme.typography.fontWeight.text.l1.desktop};
          line-height: ${(props) =>
            props.theme.typography.lineHeight.text.l1.desktop};

          span {
            display: flex;
            align-items: center;
            text-align: center;
            color: ${(props) => props.theme.colors.neutral[0]};
          }
        }
        .bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;

          font-size: ${(props) =>
            props.theme.typography.fontSize.text.l2.desktop};
          font-weight: ${(props) =>
            props.theme.typography.fontWeight.text.l2.desktop};
          line-height: ${(props) =>
            props.theme.typography.lineHeight.text.l2.desktop};

          span {
            display: flex;
            align-items: center;
            text-align: center;
            color: ${(props) => props.theme.colors.neutral[0]};
          }
        }
      }

      .CTA-amount {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 24px;

        width: 264px;
        height: 110px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
        .amounts {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 4px;

          width: 264px;
          height: 35px;

          /* Inside auto layout */

          flex: none;
          order: 0;
          align-self: stretch;
          flex-grow: 0;
          .selector {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 4px 16px;
            gap: 10px;

            width: 85.33px;
            height: 35px;

            background: #e6f0ff;
            border-radius: 12px;
            border: none;

            cursor: pointer;

            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 1;
            span {
              width: 44px;
              height: 27px;

              font-size: ${(props) =>
                props.theme.typography.fontSize.text.l1.desktop};
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
              /* Inside auto layout */

              flex: none;
              order: 0;
              flex-grow: 0;
            }
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
        }
        .cta {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 12px 16px;
          gap: 10px;

          width: 264px;
          height: 51px;

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

          span {
            height: 27px;

            font-size: ${(props) =>
              props.theme.typography.fontSize.text.l1.desktop};
            font-weight: ${(props) =>
              props.theme.typography.fontWeight.text.l1.desktop};
            line-height: ${(props) =>
              props.theme.typography.lineHeight.text.l1.desktop};

            /* Neutrals/0 */

            color: ${(props) => props.theme.colors.neutral[0]};

            /* Inside auto layout */

            flex: none;
            order: 1;
            flex-grow: 0;

            .icon {
              width: 24px;
              height: 24px;

              border-radius: 40px;

              flex: none;
              order: 0;
              flex-grow: 0;
            }
            .text {
              width: 102px;
              height: 27px;

              flex: none;
              order: 1;
              flex-grow: 0;
            }
          }
        }
      }
    }
  }
`;
