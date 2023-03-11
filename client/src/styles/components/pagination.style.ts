import styled from "styled-components";

export const PaginationContainer = styled.div`
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

    
    border-radius: 8px;

    flex: none;
    order: 0;
    flex-grow: 0;
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

    
    border-radius: 8px;

    flex: none;
    order: 2;
    flex-grow: 0;
  }

  .disabled {
    background: ${(props) => props.theme.colors.neutral[200]};
    color: ${(props) => props.theme.colors.neutral[300]};
    cursor: not-allowed;
  }
  .enabled {
    background: ${(props) => props.theme.colors.light[1]};
    color: ${(props) => props.theme.colors.neutral[500]};
    cursor: pointer;
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