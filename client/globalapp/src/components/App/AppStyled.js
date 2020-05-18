import styled from 'styled-components';

const AppStyled = styled.div`
  width: 100%;
  height: 100vh;
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeight};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkBlue};
`;

export default AppStyled;