import styled from 'styled-components';

const EditorDayStyled = styled.div`
  width: 100%;
  height: 75vh;
  background-color: rgba(239, 247, 246, 0.7);
  text-align: left;
  overflow-y: auto;
    
    &::-webkit-scrollbar {
    width: .5em;
    }
    
    &::-webkit-scrollbar-track {
      background-color:  ${(props) => props.theme.colors.primaryLight};
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.primary};
      outline: 1px solid slategrey;
    }

  .top-editor {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    color: ${(props) => props.theme.colors.primaryLight};
  }

  .main-editor {
    
  }

  .date-jour {
    text-transform: uppercase;
  }

  #form-day {
    padding: 0rem 2rem 1rem;
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
    text-transform: uppercase;
    margin: 0rem 0rem 1rem;
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