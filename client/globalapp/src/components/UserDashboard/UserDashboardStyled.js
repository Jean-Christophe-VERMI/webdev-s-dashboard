import styled from 'styled-components';
import navbg from './nav-bg.jpg';

const UserDashboardStyled = styled.nav`

  min-width: 25%;
  height: 100vh;
  background-image: url(${navbg});
  background-size: cover;
  
  .headerNav {
    margin: 1rem;
    display: flex; 
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;

    h2 {
      color: ${(props) => props.theme.colors.primaryLight};
      text-align: center;
    }

  }

  .logo{
    height: 70px;

  }

  .user-links {
    display: flex;
    justify-content: space-around;
    text-align: right;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.primary};

    a:hover {
      color: ${(props) => props.theme.colors.secondaryDark};
    }

  }

  .username-link {
    margin-left: 1rem;
    font-style: italic;
    color: ${(props) => props.theme.colors.primaryLight};

  }

  .logout-link {
    margin-right: 1rem;
    font-size: .8rem;
    
    font-style: italic;
    color: ${(props) => props.theme.colors.primaryLight};

  }

  .buttonNav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem 4rem;
    
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem .4rem;
    margin: .5rem 1rem;

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
    border-radius: 4px;
  }


`;

export default UserDashboardStyled;