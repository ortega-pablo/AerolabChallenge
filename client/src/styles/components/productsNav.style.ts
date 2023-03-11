import styled from "styled-components";

export const NavContainer = styled.div`
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