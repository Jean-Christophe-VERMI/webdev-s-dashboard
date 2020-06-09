import styled from 'styled-components';

const EditorDayStyled = styled.div`
  width: 100%;
  height: 70vh;
  background-color: rgba(239, 247, 246, 0.7);
  text-align: left;

  .form-day {
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

  .MuiButtonBase-root.MuiButton-root.MuiButton-contained.submit-btn.MuiButton-containedPrimary {
    margin: 3rem auto 0rem;

    &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    }
  }

`;

export default EditorDayStyled;