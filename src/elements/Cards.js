import styled from 'styled-components';
import  {elevation, transition, colors} from 'utilities';

export const Card = styled.div`
  background: white;
  border-radius: 3px;
  ${elevation[4]}
  padding: 15px;
${transition({property: 'box-shadow'})}
color: ${colors.black};

  &:hover{
    ${elevation[5]}
  }
`;