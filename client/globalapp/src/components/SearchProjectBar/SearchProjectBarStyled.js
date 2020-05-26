import styled from 'styled-components';

const SearchProjectBarStyled = styled.header`

  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  margin-left: 25%;
  height: 15vh;
  background-color: ${(props) => props.theme.colors.primaryLight};

  
`;

export default SearchProjectBarStyled;