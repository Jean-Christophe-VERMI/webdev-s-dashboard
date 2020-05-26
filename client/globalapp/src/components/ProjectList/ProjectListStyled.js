import styled from 'styled-components';

const ProjectListStyled = styled.main`

  margin-top: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.primary};

  .errorMsg {
    font-size: .8rem;
    color: ${(props) => props.theme.colors.dangerDark};
  }
  
`;

export default ProjectListStyled;