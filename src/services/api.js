import axios from 'axios';

export default axios.create({
  baseURL: `//gateway.marvel.com/v1/public/`,
});
