import styled from 'styled-components';

const ProjectDashboardStyled = styled.section`

  width: 100%;
  background: rgb(65,199,209);
  background: linear-gradient(0deg, rgba(65,199,209,1) 0%, rgba(66,82,130,1) 100%);
  font-family: ${(props) => props.theme.fonts.default};

  .infosDashboard {
    color: ${(props) => props.theme.colors.primaryLight};
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
    width: 50%;
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.primaryLight};

    .stats-title {
      border-radius: 4px 4px 0px 0px;
      padding: 1rem;
      background-color: ${(props) => props.theme.colors.quaternary};
      color: ${(props) => props.theme.colors.primaryLight};
      margin: 0;
      text-transform: uppercase;
    }

    .content-stats-project {
      padding: 1rem;
    }
  }

  .tag-search {
    width: 40%;
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.primaryLight};

    .tag-title {
      border-radius: 4px 4px 0px 0px;
      padding: 1rem;
      background-color: ${(props) => props.theme.colors.quaternary};
      color: ${(props) => props.theme.colors.primaryLight};
      margin: 0;
      text-transform: uppercase;
    }

    .content-tag-search {
      padding: 1rem;
    }
  }

  .projects-finish {
    margin: 2rem auto;
    width: 90%;
  }

  .last-finish-project {
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.primaryLight};

    .finish-project-tittle {
      border-radius: 4px 4px 0px 0px;
      padding: 1rem;
      background-color: ${(props) => props.theme.colors.quaternary};
      color: ${(props) => props.theme.colors.primaryLight};
      margin: 0;
      text-transform: uppercase;
    }

    .content-finish-project {
      padding: 1rem;
    }
  }

`;

export default ProjectDashboardStyled;