import styled from 'styled-components';

const DayStyled = styled.div`

  width: 22%;
  margin: 1rem;

  .content{
    background-color: ${(props) => props.theme.colors.secondaryDark};
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    justify-content: center;

    a {
      text-decoration: none;
      display: block;
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }

  
`;

export default DayStyled;