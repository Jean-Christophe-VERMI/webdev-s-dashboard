import styled from 'styled-components';

const ProjectDashboardStyled = styled.section`

  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.primary};

  
`;

export default ProjectDashboardStyled;