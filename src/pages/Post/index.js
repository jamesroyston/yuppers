import { useEffect, useState } from 'react';
import Flex from '../../components/Flex';
import List from '../../components/List';
import Text from '../../components/Text';
import Div from '../../components/Div';
import BackButton from '../../components/BackButton';
import { fetchComments } from '../../api.js';
import { useLocation, useHistory } from 'react-router';

/* comment structure
{
    "postId": 5,
    "id": 21,
    "name": "aliquid rerum mollitia qui a consectetur eum sed",
    "email": "Noemie@marques.me",
    "body": "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus"
  }
*/

export default function Post() {
  const [comments, setComments] = useState();
  const location = useLocation();
  const history = useHistory();
  const { itemData } = location.state;
  const { userId, id, title = '', body = '' } = itemData;
  useEffect(() => {
    async function fetch() {
      const allComments = await fetchComments(id);
      setComments(allComments);
    }
    fetch();
  }, []);
  return (
    <Div mx="32px" my="16px">
      <Flex flexDirection="column">
        <Text fontSize="32px" fontWeight="600">
          <span>
            <BackButton onClick={() => history.goBack()} />
            Post: {id}
          </span>
        </Text>
        <Text>
          <Text fontWeight="600">Title:</Text> {title}
        </Text>
        <Text>
          <Text fontWeight="600">Body:</Text> {body}
        </Text>
      </Flex>

      <hr />

      <Text fontSize="16px" fontWeight="600">
        Comments:{' '}
      </Text>
      <Flex>
        <List items={comments} type="comment" />
      </Flex>
    </Div>
  );
}
