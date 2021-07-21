import styled from 'styled-components';
import Flex from '../Flex';

const FlexLink = styled(Flex)`
  cursor: ${({ cursor }) => (cursor ? cursor : 'pointer')};
`;

export default FlexLink;
