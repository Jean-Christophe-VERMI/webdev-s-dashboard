import styled from 'styled-components';

const DaysNav = styled.div`

  width: 100%;

  .validationMsg {
    margin: 0;
    padding: .5rem;
    text-align: center;
    font-size: .8rem;
    color: ${(props) => props.theme.colors.success};
  }

  .addNewDay {
    background-color: ${(props) => props.theme.colors.primary};
    color : ${(props) => props.theme.colors.primaryLight};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .label-day {
    margin: 0;
    font-size: .8rem;
  }

  .add-day-btn {
    margin-top: .5rem;
    width: 100%;
    cursor: pointer;
  }

`;

export default DaysNav;