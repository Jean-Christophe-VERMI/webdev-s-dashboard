import styled from 'styled-components';

const ProjectDetailsStyled = styled.div`
  
  margin-top: 15vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryLight};
  

  .projet-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid ${(props) => props.theme.colors.primaryLight};
    border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
  }

  .project-infos {
    background-color: ${(props) => props.theme.colors.primaryDark};
    padding: 1rem;

    .header-project-infos {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .title {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: bold;
        color: ${(props) => props.theme.colors.primaryLight};
      }

      .cat-type {
        text-transform: uppercase;
        font-style: italic;
        color: ${(props) => props.theme.colors.primaryLight};
      }

    }

  }

  .description {
    min-height: 10vh;
    padding: 1rem;
  }

  .projet-etat {
    background-color: ${(props) => props.theme.colors.primaryDark};
    padding: 1rem;
  }

  .project-categorie-techno {
    background-color: ${(props) => props.theme.colors.primaryDark};
    padding: 1rem;

  }

  .technos {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .techno {
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.colors.primaryLight};
      padding: .5rem;
    }
  }

  .title-section-days {
    padding: .5rem;
    background-color: ${(props) => props.theme.colors.quaternary};
    text-align: center;
    color: ${(props) => props.theme.colors.primaryLight};
    font-style: italic;

    h4 {
      margin: 0rem;
    }
  }

  .jours {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }

`;

export default ProjectDetailsStyled;