import styled from 'styled-components';

const AppStyled = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeight};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.primary};

  

`;

export default AppStyled;