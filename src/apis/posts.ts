import axios from 'axios';
import { PORT } from '../constants';

export const fetchAllPosts = () => {
  return axios.get(`http://localhost:${PORT}/posts`);
};
