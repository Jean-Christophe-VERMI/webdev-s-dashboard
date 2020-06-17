import styled from 'styled-components';

const ProjectListStyled = styled.main`

  width: 100%;
  background: rgb(65,199,209);
  background: linear-gradient(0deg, rgba(65,199,209,1) 0%, rgba(66,82,130,1) 100%);

  .header-projectList {
    height: 50px;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .8rem .4rem;
      margin: .5rem 1rem;
      border: 1px solid ${(props) => props.theme.colors.primaryLight};

      &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
    
    }

    .navlink {
      margin-right: .2rem;
      text-decoration: none;
      font-size: .8rem;
      color: ${(props) => props.theme.colors.primaryLight};
      font-family: ${(props) => props.theme.fonts.default};
    }

  }
  
  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.primaryLight};
  }

  .projectBar {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    border-top: 1px solid ${(props) => props.theme.colors.primaryLight};
    border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
  }

  .noProject {
    padding: .5rem;
  }

  .projets {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }

  .errorMsg {
    font-size: .8rem;
    color: ${(props) => props.theme.colors.dangerDark};
  }
  
`;

export default ProjectListStyled;