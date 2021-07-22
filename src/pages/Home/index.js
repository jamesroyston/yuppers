import { useEffect, useState } from 'react';
import Flex from '../../components/Flex';
import List from '../../components/List';
import Text from '../../components/Text';
import Div from '../../components/Div';
import { fetchPosts } from '../../api.js';
import SearchBar from '../../components/SearchBar';

export default function Home() {
  const [posts, setPosts] = useState();
  const [searching, setSearching] = useState(
    localStorage.getItem('searchInput') || false
  );
  useEffect(() => {
    async function fetch() {
      const allPosts = await fetchPosts();
      setPosts(allPosts);
    }
    !searching && fetch();
  }, [searching]);
  return (
    <Div mx="32px" my="16px">
      <Text fontSize="48px" fontWeight="600">
        Posts
      </Text>{' '}
      <SearchBar
        setSearching={setSearching}
        setPosts={setPosts}
        searching={searching}
        resultsLength={posts?.length || 0}
      />
      <Flex>
        <List items={posts} type="post" />
      </Flex>
    </Div>
  );
}
