import styled from 'styled-components';

const MainStyled = styled.div`

  width: 100%;
  background: rgb(65,199,209);
  background: linear-gradient(0deg, rgba(65,199,209,1) 0%, rgba(66,82,130,1) 100%);
  
  .content{
    display: flex;
    flex-direction: row;

  }

  .searchProjectBar {
    margin-left: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 15vh;
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
  
 
`;

export default MainStyled;