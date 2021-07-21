import { useEffect, useState } from 'react';
import Flex from '../../components/Flex';
import List from '../../components/List';
import Text from '../../components/Text';
import Div from '../../components/Div';
import { fetchPosts } from '../../api.js';

export default function Home() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    async function fetch() {
      const allPosts = await fetchPosts();
      setPosts(allPosts);
    }
    fetch();
  }, []);
  return (
    <Div mx="32px" my="16px">
      <Text fontSize="48px" fontWeight="600">
        Posts
      </Text>
      <Flex>
        <List items={posts} type="post" />
      </Flex>
    </Div>
  );
}
