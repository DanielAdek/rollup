import axios from 'axios';

const API_URL = 'http://localhost:7000';

export const fetchItem = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
