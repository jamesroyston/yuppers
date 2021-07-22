import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchPosts = () => axios(`${BASE_URL}/posts/`).then(({ data }) => data);
const fetchComments = postId =>
  axios(`${BASE_URL}/comments?postId=${postId}`).then(({ data }) => data);
// bonus feature
const fetchPostsByUser = userId =>
  axios(`${BASE_URL}/posts?userId=${userId}`).then(({ data }) => data);
export { fetchPosts, fetchComments, fetchPostsByUser };
