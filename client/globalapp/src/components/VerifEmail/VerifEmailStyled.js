import styled from 'styled-components';

const VerifEmailStyled = styled.section`
  
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgb(65,199,209);
  background: linear-gradient(0deg, rgba(65,199,209,1) 0%, rgba(66,82,130,1) 100%);

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


    .headerForm {
      text-align: center;
      width: 100%;
      background-color: ${(props) => props.theme.colors.blueNav};
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
      justify-content: space-between;
      flex-direction: column;
      margin: 1rem 0rem 2rem;
    }

    .msgState {
      text-align: center;


      .errorMsg {
        font-size: .8rem;
        color: ${(props) => props.theme.colors.dangerDark};
      }

      .validationMsg {
        font-size: .8rem;
        color: ${(props) => props.theme.colors.success};
      }

    }

    .MuiButtonBase-root.MuiButton-root.MuiButton-contained.submit-btn.MuiButton-containedPrimary {

      margin: 2rem auto 0rem;
      
      &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      }

    }


  }
  
`;

export default VerifEmailStyled;