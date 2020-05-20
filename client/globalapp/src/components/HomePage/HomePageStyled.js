import styled from 'styled-components';

const HomePageStyled = styled.div`

  width: 85%;
  height: 100vh;
  background: rgb(65,199,209);
  background: linear-gradient(0deg, rgba(65,199,209,1) 0%, rgba(66,82,130,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  

.header {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.title-home {
  -webkit-animation: tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	animation: tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  color: ${(props) => props.theme.colors.primaryLight};
  border-bottom: 3px solid ${(props) => props.theme.colors.primaryLight};
  margin: 0;
  padding-bottom: .5rem;
}

.content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.left-content {
  border-right: 1.5px solid ${(props) => props.theme.colors.primaryLight};
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: .8rem;
  padding-top: 4rem;
}

.right-content {
  border-left: 1.5px solid ${(props) => props.theme.colors.primaryLight};
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: .8rem;
  padding-top: 8rem;
}

.arrow_box1 {
  max-width: 80%;
  padding: 0 .8rem;
  margin-bottom: 4rem;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.secondaryDark};
	position: relative;
	background: #eff7f6;
	border: 2px solid ${(props) => props.theme.colors.primaryLight};
  -webkit-animation: fade-in-left 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in-left 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  box-shadow: -8px -8px 0 ${(props) => props.theme.colors.secondaryDark};
 
}

.arrow_box1:after, .arrow_box1:before {
	left: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.arrow_box1:after {
	border-color: rgba(239, 247, 246, 0);
	border-left-color: #eff7f6;
	border-width: 10px;
	margin-top: -10px;
}

.arrow_box1:before {
	border-color: rgba(63, 81, 181, 0);
	border-left-color: ${(props) => props.theme.colors.primaryLight};
	border-width: 13px;
	margin-top: -13px;
}

.arrow_box2 {
  max-width: 80%;
  padding: 0 .8rem;
  margin-bottom: 4rem;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.secondaryDark};
	position: relative;
	background: #eff7f6;
	border: 2px solid ${(props) => props.theme.colors.primaryLight};
  -webkit-animation: fade-in-right 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in-right 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  box-shadow: 8px -8px 0 ${(props) => props.theme.colors.secondaryDark};
}

.arrow_box2:after, .arrow_box2:before {
	right: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.arrow_box2:after {
	border-color: rgba(239, 247, 246, 0);
	border-right-color: #eff7f6;
	border-width: 10px;
	margin-top: -10px;
}

.arrow_box2:before {
	border-color: rgba(63, 81, 181, 0);
	border-right-color: ${(props) => props.theme.colors.primaryLight};
	border-width: 13px;
	margin-top: -13px;
}

.div-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-animation: fade-in-bottom 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in-bottom 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.logo-wifi {
  height: 50px;
}

.rgpd {
  font-size: .8rem;
}

.rgpd-link {
  color: ${(props) => props.theme.colors.ternary};

}

@-webkit-keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}

@-webkit-keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}


`;

export default HomePageStyled;