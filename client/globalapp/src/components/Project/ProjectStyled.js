import styled from 'styled-components';

const ProjectStyled = styled.div`

  width: 30%;
  margin: 1rem auto;

  .content{
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
    
    &:hover {
      -webkit-animation: shadow-pop-tr 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	    animation: shadow-pop-tr 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
    }
  }

  .header-content {
  padding: .5rem;
  border-radius: 4px 4px 0px 0px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.quaternary};
  text-transform: uppercase;

    a {
      text-decoration: none;
      font-weight: bold;
      color :  ${(props) => props.theme.colors.primaryLight};
    }

  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 15vh;
    padding: .5rem;

    p {
      text-align: center;
    }
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.primaryLight};
    background-color: ${(props) => props.theme.colors.quaternary};
    margin: 0px;
    font-size: .8rem;
    text-align: right;
    border-radius: 0px 0px 4px 4px;

    .categorie {
      text-transform: uppercase;
    }

    p {
      margin : 0;
      padding: 0rem .5rem;
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

export default ProjectStyled;


