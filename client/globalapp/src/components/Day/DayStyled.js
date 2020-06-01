import styled from 'styled-components';

const DayStyled = styled.div`

  margin: 1rem;
  width: 80%;
  text-align: center;
  
  .content-day{
    background-color: ${(props) => props.theme.colors.quaternary};
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    .date {
      padding: .3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    .icon {
      color: ${(props) => props.theme.colors.primary};
      height: 20px;
    }
   
    .day-link {
      text-decoration: none;
      display: block;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primaryLight};
      font-weight: bold;
      
    }

    .tag {
      width: 100%;
      height: 3rem;
      text-align: center;
      background-color: ${(props) => props.theme.colors.primary};
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