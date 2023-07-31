import axios from 'axios';
import { PORT } from '../constants';

export const fetchAllPosts = () => {
  return axios.get(`http://localhost:${PORT}/posts`);
};

export const fetchFirstPost = () => {
  return axios.get(`http://localhost:${PORT}/firstpost`);
};

export default { fetchAllPosts, fetchFirstPost };
