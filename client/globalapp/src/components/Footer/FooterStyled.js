import styled from 'styled-components';

const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 20;
  background-color: transparent;
  display: block;
  max-height: 20vh;
  padding: ${(props) => props.theme.sizings.medium};
  margin-right: ${(props) => props.theme.sizings.medium};

  .footer {
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: ${(props) => props.theme.sizings.medium};
  }

  .mentions,
  .termes,
  .contact {
    padding: ${(props) => props.theme.sizings.medium};
    text-align: right;
    align-items: center;
    justify-content: space-between;

    &:hover {
      color: ${(props) => props.theme.colors.linkDark};
    }
  }
`;

export default FooterStyled;