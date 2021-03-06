import styled from 'styled-components';
import navbg from './nav-bg.jpg';

const NavStyled = styled.nav`

  min-width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${navbg});
  background-size: cover;


  @media screen and (max-width:360px) {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 12vh;
    display: flex;
    flex-direction: row;
    flex-warp: nowrap;
    justify-content: space-around;
    
  }

  @media screen and (max-width:640px) and (orientation:landscape) {
    position : sticky;
    top: 0;
    height: 100vh;
  }

  
  .logoNav {
    margin: 0 auto;

    @media screen and (max-width:360px) {
      display: flex;
      align-items: center;
      justify-content: center;
      
    }

  }

  .logo{
    height: 200px;
    

    @media screen and (max-width:360px) {
      position: absolute;
      top: -5px;
      left: 5px;
      height: 88px;
      margin: .2rem;
    }

    @media screen and (max-width:640px) and (orientation:landscape) {
      height: 105px;
    }

  }

  .buttonNav {
    display: flex;
    flex-direction: column;
    margin: 3rem;

    @media screen and (max-width:360px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      
    }
  }

  .button {
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
    padding: .8rem .4rem;
    margin: .5rem 1rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }

    a:active {
      background-color: ${(props) => props.theme.colors.secondary};
    }
    
    
  }

  .MuiButtonBase-root.MuiButton-root.MuiButton-contained {
    @media screen and (max-width:360px) {
      margin: .2rem;
    }

    @media screen and (max-width:640px) and (orientation:landscape) {
      margin: .2rem;
    }

  }

  .navlink {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryLight};
    font-family: ${(props) => props.theme.fonts.default};

  }

  

`;

export default NavStyled;