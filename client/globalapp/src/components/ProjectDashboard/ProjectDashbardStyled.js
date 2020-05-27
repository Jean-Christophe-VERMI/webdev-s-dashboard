import styled from 'styled-components';

const ProjectDashboardStyled = styled.section`

  margin-top: 15vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryLight};
  font-family: ${(props) => props.theme.fonts.default};

  .noProject {
    margin: 0 auto;
    width: 90%;
    padding: 1rem;

    p{
      margin: 0;
    }
  }
  
  .button {
    padding: .5rem 1rem;
    margin: 1rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
    
  }

  .newProject-btn {
    text-decoration: none;
    font-size: .8rem;
    color: ${(props) => props.theme.colors.primaryLight};
    font-family: ${(props) => props.theme.fonts.default};
  }

  .dashboard-infos {
    margin: 1rem auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .stats-projets {
    width: 40%;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1rem 2rem;
    border-radius: 4px;

    .stats-title {
      margin: 0;
      text-transform: uppercase;
    }
  }

  .tag-search {
    width: 40%;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1rem 2rem;
    border-radius: 4px;

    .tag-title {
      margin: 0;
      text-transform: uppercase;
    }
  }

  .projects-finish {
    margin: 2rem auto;
    width: 90%;
  }

  .last-finish-project {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1rem 2rem;
    border-radius: 4px;

    .finish-project-tittle {
      margin: 0;
      text-transform: uppercase;
    }
  }

`;

export default ProjectDashboardStyled;