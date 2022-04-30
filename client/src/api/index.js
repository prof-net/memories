import axios from 'axios';

const url = 'http://lovalhost:5000/posts';

export const fetchPosts = () => axios.get(url);