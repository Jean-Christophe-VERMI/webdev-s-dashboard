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
    width: 75%;
    display: flex;
    flex-direction: column;
  }

  .editor-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  }

  .infos-title-type {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .cat-edit {
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
    width: 25%;
    
  }

  .project-infos {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1rem;
    height: 25vh;

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
    max-width: 60%;
  }

  .bottom-infos-project {
    padding: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  .projet-etat {
    background-color: ${(props) => props.theme.colors.primaryDark};
    padding: 1rem;
  }

  .project-categorie-techno {
    background-color: ${(props) => props.theme.colors.primaryDark};

  }

  .technos {
    padding: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .techno {
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.colors.primaryLight};
      padding: .5rem;
      margin-left: .3rem;
    }
  }

  .header-section-days {
    margin: 0 auto;
    height: 25vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.primaryLight};
    background-color: rgba(0, 0, 0, 0.2);
    font-style: italic;
  }

  .jours {
    background-color:  ${(props) => props.theme.colors.blueNav};
    display: flex;
    flex-wrap: nowrap;
    height: 75vh;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    
    
    &::-webkit-scrollbar {
    width: .5em;
    }
    
    &::-webkit-scrollbar-track {
      background-color:  ${(props) => props.theme.colors.primaryLight};
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.primary};
      outline: 1px solid slategrey;
    }
  }

  .button {
    margin-top: .3rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.colors.primaryLight};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
    
  }

`;

export default ProjectDetailsStyled;