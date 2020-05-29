import styled from 'styled-components';

const ProjectListStyled = styled.main`

  margin-top: 15vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};

  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.primaryLight};
  }

  .projets {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
  }

  .errorMsg {
    font-size: .8rem;
    color: ${(props) => props.theme.colors.dangerDark};
  }
  
`;

export default ProjectListStyled;