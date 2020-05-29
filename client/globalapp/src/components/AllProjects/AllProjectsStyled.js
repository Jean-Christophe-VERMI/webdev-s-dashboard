import styled from 'styled-components';

const AllProjectStyled = styled.div`

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem .8rem;
    margin: .5rem 1rem;
    border: 1px solid ${(props) => props.theme.colors.primaryLight};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }

  }
  
  .navlink {
    margin-left: .2rem;
    text-decoration: none;
    font-size: .8rem;
    color: ${(props) => props.theme.colors.primaryLight};
    font-family: ${(props) => props.theme.fonts.default};
  }

  
`;

export default AllProjectStyled;