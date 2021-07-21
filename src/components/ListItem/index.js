import React from 'react';
import Text from '../Text';
import Flex from '../Flex';
import Div from '../Div';
import FlexLink from '../FlexLink';
import { useHistory } from 'react-router-dom';

function ListItem({ itemData, type }) {
  const { userId, id, title = '', body = '', email = '', name = '' } = itemData;
  const history = useHistory();

  return (
    <FlexLink
      px="16px"
      py={type === 'post' ? '8px' : '16px'}
      mb="16px"
      borderRadius="10px"
      onClick={() =>
        type === 'post'
          ? history.push(`/yuppers/post/${id}`, {
              itemData,
            })
          : null
      }
      border="2px solid black"
      cursor={type === 'post' ? 'pointer' : 'default'}
      flexDirection="column"
    >
      {type === 'post' && (
        <Flex alignItems="center">
          <Text mr="8px" fontWeight="600">
            Title:{' '}
          </Text>
          <Text>{title}</Text>
        </Flex>
      )}

      {type === 'comment' && (
        <>
          <Text fontStyle="italic">
            <Text fontWeight="bold">{email}</Text> left a comment:
          </Text>
          <Flex>
            <Div width="3px" bg="gray" mr="16px" />
            <Text>{body}</Text>
          </Flex>
        </>
      )}
    </FlexLink>
  );
}

export default ListItem;
