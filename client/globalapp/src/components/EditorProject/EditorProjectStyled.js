import styled from 'styled-components';

const EditorProjectStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  

  .form-title {
    color: ${(props) => props.theme.colors.primaryLight};
    text-transform: uppercase;
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

    .project-categorie {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    
    .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated {
      padding-left: .5rem;
    }

    #categorie {
      width: 100%
    }

    .MuiFormControl-root {
      width: 99%;
      margin: .3rem 0rem;
    }

    .headerForm {
      text-align: center;
      width: 100%;
      background-color: ${(props) => props.theme.colors.quaternary};
      border-radius: 4px 4px 0px 0px;
    }

    .fieldForm {
      width: 70%;
      display: flex;
      flex-direction: column;
      margin: 2rem 0rem 2rem;
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

      margin: 3rem auto 0rem;
      
      &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      }

    }


  }
`;

export default EditorProjectStyled;