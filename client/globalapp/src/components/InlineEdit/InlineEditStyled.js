import styled from 'styled-components';

const InlineEditStyled = styled.div`
  width: 80%;

  .inline-text_copy--active,
  .inline-text_input--active {
    width: 100%;
    font: inherit;
    color: inherit;
    text-align: inherit;
    padding: 0rem;
    background: none;
    border: none;
    border-bottom: 1px dashed black;
  }

  .inline-text_copy--active {
    cursor: pointer;
  }

  .inline-text_copy--hidden,
  .inline-text_input--hidden {
    display: none;
  }

  .inline-text_input--active {
    padding: .5rem;
    border-bottom: 1px solid black;
    text-align: left;
  }
`;

export default InlineEditStyled;

