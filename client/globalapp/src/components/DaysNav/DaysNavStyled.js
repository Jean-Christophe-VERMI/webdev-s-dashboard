import styled from 'styled-components';

const DaysNav = styled.div`

  width: 100%;

  .validationMsg {
    text-align: center;
    font-size: .8rem;
    color: ${(props) => props.theme.colors.success};
  }

`;

export default DaysNav;