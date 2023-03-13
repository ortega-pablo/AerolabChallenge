import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;

  position: absolute;
  height: 200px;
  left: 0px;
  right: 0px;

  background: ${(props) => props.theme.colors.neutral[0]};

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap: 8px;

    width: 233px;
    height: 40px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  a {
    all: unset;
    width: 185px;
    height: 27px;
    
    font-size: ${(props) => props.theme.typography.fontSize.text.l1.desktop};
    font-weight: ${(props) =>
      props.theme.typography.fontWeight.text.l1.desktop};
    line-height: ${(props) =>
      props.theme.typography.lineHeight.text.l1.desktop};
    color: ${(props) => props.theme.colors.neutral[600]};
    text-align: right;
    
    cursor: pointer;
    
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
