import styled from 'styled-components';

const ProjectStyled = styled.div`

  width: 30%;
  margin: 0 auto;

  .content{
  background-color: ${(props) => props.theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
  }

  .header-content {
  padding: .5rem;
  border-radius: 4px 4px 0px 0px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.quaternary};
  text-transform: uppercase;

    a {
      color :  ${(props) => props.theme.colors.primaryLight};
    }

  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    padding: .5rem;

    p {
      text-align: center;
    }
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.primaryLight};
    background-color: ${(props) => props.theme.colors.quaternary};
    margin: 0px;
    font-size: .8rem;
    text-align: right;
    border-radius: 0px 0px 4px 4px;

    .categorie {
      text-transform: uppercase;
    }

    p {
      margin : 0;
      padding: 0rem .5rem;
    }
  }
  
`;

export default ProjectStyled;


