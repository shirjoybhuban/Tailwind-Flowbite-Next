import axios from 'axios';

const canadapostApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
});

export default canadapostApi;
