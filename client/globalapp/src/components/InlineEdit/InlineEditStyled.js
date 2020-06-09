import styled from 'styled-components';

const InlineEditStyled = styled.div`
  width: 100%;

  .inline-text_copy--active,
  .inline-text_input--active {
    width: 100%;
    font: inherit;
    color: inherit;
    text-align: inherit;
    padding: 0rem;
  }

  .inline-text_copy--active {
    cursor: text;
    
  }

  .inline-text_copy--hidden,
  .inline-text_input--hidden {
    display: none;
  }

  .inline-text_input--active {
    padding: .3rem;
    text-align: left;
  }
`;

export default InlineEditStyled;

