import styled from 'styled-components';

const TagStyled = styled.div`
  
  .tagname{
    
    .tag {
      text-decoration: none;
      font-style: italic;
      display: block;
      color: ${(props) => props.theme.colors.primaryLight};

    }

  }

  
`;

export default TagStyled;