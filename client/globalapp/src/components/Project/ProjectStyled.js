import styled from 'styled-components';

const ProjectStyled = styled.div`

  width: 30%;
  margin: 1rem auto;
  color :  ${(props) => props.theme.colors.primaryLight};

  .content{
    background-color:  ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    border-radius: 8px 0px 8px 0px;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
      
  }

  .header-content {
    padding: .5rem;
    border-radius: 8px 0px 0px 0px;
    text-align: center;
    text-transform: uppercase;

      a {
        font-size: 1.2rem;
        text-decoration: none;
        font-weight: bold;
        color :  ${(props) => props.theme.colors.primaryLight};

        &:hover {
          color :  ${(props) => props.theme.colors.quaternary};
        }

      }

  }

  .technos {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .2rem;
  }

  .description {
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-radius: 0px 0px 8px 0px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vh;
    padding: .5rem;

    p {
      margin: 0;
    }
  }

  .cat-date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px;
    font-size: .8rem;
    text-align: right;
    padding: 0rem .5rem;
    font-style: italic;
    background-color :  ${(props) => props.theme.colors.quaternary};

    .categorie {
      text-transform: uppercase;
    }

    p {
      margin : 0;
    }
  }

  
`;

export default ProjectStyled;


