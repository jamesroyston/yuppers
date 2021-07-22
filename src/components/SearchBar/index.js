import Flex from '../Flex';
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { fetchPostsByUser } from '../../api';
import Text from '../../components/Text';

const ResultsText = styled(Text)`
  margin-bottom: 0;
  margin-top: 0;
`;

const Span = styled.span`
  margin-right: 0.25em;
`;

export default function SearchBar({
  setPosts,
  setSearching,
  resultsLength,
  searching,
}) {
  const [input, setInput] = useState(localStorage.getItem('searchInput') || '');
  const [userString, setUserString] = useState(
    localStorage.getItem('userId') || ''
  );

  async function submit() {
    if (input !== '') {
      const userPosts = fetchPostsByUser(input);
      setPosts(await userPosts);
      setSearching(true);
      setUserString(input);
      localStorage.setItem('userId', input);
    }
  }

  function saveInput(input) {
    setInput(input);
    localStorage.setItem('searchInput', input);
  }

  function resetInput() {
    setInput('');
    localStorage.removeItem('searchInput');
    localStorage.removeItem('userId');
  }

  useEffect(() => {
    if (input === '') {
      setSearching(false);
    }
    if (!localStorage.getItem('searchInput')) {
      setSearching(false);
    }
  }, [input, setSearching]);

  useEffect(() => {
    async function fetch() {
      if (localStorage.getItem('searchInput')) {
        const userPosts = fetchPostsByUser(localStorage.getItem('searchInput'));
        setInput(localStorage.getItem('searchInput'));
        setPosts(await userPosts);
      }
    }
    fetch();
  }, [searching]);

  return (
    <Flex alignItems="center" mb="1em">
      <Span>
        <input
          type="text"
          value={input}
          onKeyDown={e => {
            e.key === 'Enter' && submit();
          }}
          onChange={e => {
            saveInput(e.target.value);
            if (e.target.value === '') {
              resetInput();
            }
          }}
        />
      </Span>
      <Span>
        <button onClick={submit}>search</button>
      </Span>

      {searching && (
        <ResultsText fontSize="0.8em" display="inline">
          showing ({resultsLength}) posts by user: "{userString}"
        </ResultsText>
      )}

      {!searching && (
        <ResultsText fontSize="0.8em" display="inline">
          showing all posts ({resultsLength})
        </ResultsText>
      )}
    </Flex>
  );
}
