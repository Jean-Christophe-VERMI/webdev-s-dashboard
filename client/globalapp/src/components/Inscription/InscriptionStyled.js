import styled from 'styled-components';

const InscriptionStyled = styled.section`

  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgb(65,199,209);
  background: linear-gradient(0deg, rgba(65,199,209,1) 0%, rgba(66,82,130,1) 100%);

  @media screen and (max-width:360px) {
    padding-top: 5rem;
    width: 100%;
    height: 90vh;
  }

  @media screen and (orientation:landscape) {
    margin: 1rem;
    width: 80%;
    height: auto;
  }

  .site-name {
    color: ${(props) => props.theme.colors.primaryLight};
  }
  
  .formulaire {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.primaryLight};
    border: 1px solid ${(props) => props.theme.colors.primaryLight};

    @media screen and (max-width:360px) {
      width: 95%;
    }

    @media screen and (orientation:landscape) {
      width: 95%;
    }


    .headerForm {
      text-align: center;
      width: 100%;
      background-color: ${(props) => props.theme.colors.quaternary};
      border-radius: 4px 4px 0px 0px;
    }
    

    h3 {
      color: ${(props) => props.theme.colors.primaryDark};
      margin: 0;
      padding-top: .5rem;
      text-transform: uppercase;
    }

    .fieldForm {
      width: 70%;
      display: flex;
      flex-direction: column;
      margin: 1rem 0rem 2rem;
    }

    .terms {
      text-align: center;
      font-size: .8rem;

      a {
        font-size: .8rem;
        text-decoration: none;
        color: ${(props) => props.theme.colors.secondaryDark};
        font-weight: bold;
      }

    }

    .msgState {
      text-align: center;


      .errorMsg {
        margin: .5rem;
        font-size: .8rem;
        color: ${(props) => props.theme.colors.dangerDark};
      }

      .validationMsg {
        margin: .5rem;
        font-size: .8rem;
        color: ${(props) => props.theme.colors.success};
      }

    }

    .MuiButtonBase-root.MuiButton-root.MuiButton-contained.submit-btn.MuiButton-containedPrimary {

      margin: 0 auto;
      
      &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      }

    }


  }

  
`;

export default InscriptionStyled;