import styled from 'styled-components';

const DayStyled = styled.div`

  margin: 1rem;
  
  .content{
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.quaternary};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    .date {
      padding: .3rem;
      text-decoration: none;
      display: block;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.quaternary};
      font-weight: bold;
      
    }

    .tag {
      width: 100%;
      height: 3rem;
      text-align: center;
      border-top: 1px solid ${(props) => props.theme.colors.quaternary};
      background-color: ${(props) => props.theme.colors.quaternary};
      border-radius: 0px 0px 4px 4px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      p {
        margin: 0;
      }
    }

  }



  
`;

export default DayStyled;