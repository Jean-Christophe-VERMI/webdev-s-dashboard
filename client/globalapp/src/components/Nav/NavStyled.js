import styled from 'styled-components';
import navbg from './nav-bg.jpg';

const NavStyled = styled.nav`

  min-width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${navbg});
  background-size: cover;
  
  .logoNav {
    margin: 0 auto;
  }

  .logo{
    height: 120px;
    margin: 1.5rem;

    &:hover {
      
    }

  }

  .buttonNav {
    display: flex;
    flex-direction: column;
    margin: 4rem;
  }

  .button {
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
    padding: .8rem .4rem;
    margin: .5rem 1rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
    
  }

  .navlink {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryLight};
    font-family: ${(props) => props.theme.fonts.default};
  }

`;

export default NavStyled;