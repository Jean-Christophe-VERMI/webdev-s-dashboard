import styled from 'styled-components';

const DayStyled = styled.div`

  padding: .5rem;
  width: 80%;
  text-align: center;

  
  .content-day{
    background-color: ${(props) => props.theme.colors.quaternary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }

    .date {
      padding: .3rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: .8rem;

      a {
        text-decoration: none;
      }
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
      background-color: rgba(239, 247, 246, 0.7);
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


  @-webkit-keyframes shadow-pop-tr {
    0% {
      -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
              box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      -webkit-transform: translateX(0) translateY(0);
              transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
              box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
      -webkit-transform: translateX(-8px) translateY(8px);
              transform: translateX(-8px) translateY(8px);
    }
  }
  @keyframes shadow-pop-tr {
    0% {
      -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
              box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      -webkit-transform: translateX(0) translateY(0);
              transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
              box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
      -webkit-transform: translateX(-8px) translateY(8px);
              transform: translateX(-8px) translateY(8px);
    }
  }


  
`;

export default DayStyled;