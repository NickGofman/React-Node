import axios from 'axios';

//create connection to axios
export default axios.create({
  baseURL: 'http://localhost:3001',
});
