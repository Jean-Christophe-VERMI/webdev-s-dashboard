import styled from 'styled-components';

const EditorDayStyled = styled.div`
  width: 100%;
  height: 70vh;
  background-color: rgba(239, 247, 246, 0.7);
  text-align: left;

  .top-editor {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    color: ${(props) => props.theme.colors.primaryLight};
  }

  .date-jour {
    text-transform: uppercase;
  }

  #form-day {
    padding: 2rem;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .text-zone {
    width: 100%;
  }

  .title-textField {
    margin: rem;
    text-align: left;
  }

  .textField {
    margin-bottom: 2rem;
    width: 90%;
  }

  .submit-btn {
    cursor: pointer;
    padding: .2rem .4rem;
  }

`;

export default EditorDayStyled;