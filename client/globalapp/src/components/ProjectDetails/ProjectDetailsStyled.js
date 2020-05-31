import styled from 'styled-components';

const ProjectDetailsStyled = styled.div`
  
  width: 100%;
  background: rgb(65,199,209);
  background: linear-gradient(0deg, rgba(65,199,209,1) 0%, rgba(66,82,130,1) 100%);

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .section-project {
    width: 60%;
  }

  .infos-title-type {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .cat-edit {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .cat-etat {
    text-transform: uppercase;
    font-style: italic;
    color: ${(props) => props.theme.colors.primaryLight};
  }

  .section-days {
    width: 40%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.30);
    overflow-y: auto;
    
    &::-webkit-scrollbar {
    width: .5em;
    }
    
    &::-webkit-scrollbar-track {
      background-color:  ${(props) => props.theme.colors.primary};
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.secondary};
      outline: 1px solid slategrey;
    }

  }

  .project-infos {
    background-color: ${(props) => props.theme.colors.primary};
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
      margin: .5rem;
    }
  }

  .header-section-days {
    display: flex;
    justify-content: center;
    padding: 1rem;
    color: ${(props) => props.theme.colors.primaryLight};
    font-style: italic;
  }

  .jours {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
  }

`;

export default ProjectDetailsStyled;