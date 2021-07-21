import Flex from '../Flex';
import Div from '../Div';
import Text from '../Text';
import FlexLink from '../FlexLink';

export default function BackButton({ onClick }) {
  return (
    <FlexLink
      border="2px solid black"
      width="fit-content"
      alignItems="center"
      onClick={onClick}
      px="2"
      mb="0.5em"
      borderRadius="8px"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        height="1em"
        mr="0.25em"
      >
        {'<'}
      </Flex>
      <Text fontSize="0.6em">Back</Text>
    </FlexLink>
  );
}
