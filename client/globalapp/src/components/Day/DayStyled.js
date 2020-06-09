import styled from 'styled-components';

const DayStyled = styled.div`

  margin: .5rem;
  width: 80%;
  text-align: center;

  &:hover {
    -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
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
      justify-content: center;
      align-items: center;

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


  @-webkit-keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 25px 0px rgba(76, 150, 215, 0.9);
              box-shadow: 0 0 25px 0px rgba(76, 150, 215, 0.9);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 25px 0px rgba(76, 150, 215, 0.9);
              box-shadow: 0 0 25px 0px rgba(76, 150, 215, 0.9);
    }
  }


  
`;

export default DayStyled;