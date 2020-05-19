import styled from 'styled-components';

const FooterStyled = styled.div`

  background-color: ${(props) => props.theme.colors.quaternary};
  font-family: ${(props) => props.theme.fonts.default};
  
  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .footer-link {
      color: ${(props) => props.theme.colors.primaryLight};
      padding: .2rem;
    }
  }
`;

export default FooterStyled;