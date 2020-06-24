import styled from 'styled-components';

const TagStyled = styled.div`
  
  width: 100%;
  
  .tagname{
    display: flex;
    justify-content: center;
    
    .tag-link {
      text-decoration: none;
      font-style: italic;
      color: ${(props) => props.theme.colors.secondary};

      &:hover {
          color:  ${(props) => props.theme.colors.quaternary};
        }

    }

  }

  
`;

export default TagStyled;