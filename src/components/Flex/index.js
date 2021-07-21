import styled from 'styled-components';
import {
  flexbox,
  color,
  layout,
  border,
  background,
  position,
  space,
} from 'styled-system';

const Flex = styled.div`
  ${flexbox}
  ${space}
  ${color}
  ${layout}
  ${border}
  ${background}
  ${position}

  display: flex;
`;

export default Flex;
