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

  .site-name {
    color: ${(props) => props.theme.colors.primaryLight};
  }
  
  .formulaire {
    width: 75%;
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
      padding: 1rem;
      text-transform: uppercase;
    }

    .checkboxTerms {
      text-align: center;
      font-size: .8rem;

      a {
        font-size: .8rem;
        text-decoration: none;
        color: ${(props) => props.theme.colors.secondaryDark};
        font-weight: bold;
      }

    }

  }

  .fieldForm {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 1rem 0rem 2rem;
  }

  .submitButton {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    b {
      font-size: .8rem;
      margin: 0rem 0rem .5rem;
      color: ${(props) => props.theme.colors.dangerDark};
    }

    p {
      margin: 0rem 0rem .5rem;
      text-align: center;
      font-size: .8rem;
      color: ${(props) => props.theme.colors.success};
    }

    button {
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

}
  
`;

export default InscriptionStyled;