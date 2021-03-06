import styled from 'styled-components';

const EditorStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
  background-color: rgba(0, 0, 0, 0.3);

  .logo {
    height: 200px;
    -webkit-animation: roll-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	  animation: roll-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }

  @-webkit-keyframes roll-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
            transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes roll-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
            transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

`;

export default EditorStyled;