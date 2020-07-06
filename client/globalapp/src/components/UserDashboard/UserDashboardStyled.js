import styled from 'styled-components';
import navbg from './nav-bg.jpg';

const UserDashboardStyled = styled.nav`

  max-width: 20%;
  min-height: 100vh;
  background-image: url(${navbg});
  background-size: cover;
  
  .headerNav {
    height: 50px;
    margin: auto;
    padding: 1.5rem;
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 0;
      padding: 0;
      color: ${(props) => props.theme.colors.primaryLight};
      text-align: center;
    }

  }

  .logo{
    height: 100px;
  }

  .user-links {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-top: 1px solid ${(props) => props.theme.colors.primaryLight};
    border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
    background-color: ${(props) => props.theme.colors.primary};

  }

  .username-link {
    margin-right: .5rem;
    font-style: italic;
    color: ${(props) => props.theme.colors.primaryLight};

  }

  .logout-link {
    margin-left: .5rem;
    font-style: italic;
    color: ${(props) => props.theme.colors.quaternary};

  }

  .buttonNav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 3rem;
    
  }

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
    margin-left: .2rem;
    text-decoration: none;
    font-size: .8rem;
    color: ${(props) => props.theme.colors.primaryLight};
    font-family: ${(props) => props.theme.fonts.default};
  }

  .favori-project{
    margin: 0 auto;
    padding: 1rem;
    width: 75%;
    background-color: ${(props) => props.theme.colors.primary};
  }


`;

export default UserDashboardStyled;