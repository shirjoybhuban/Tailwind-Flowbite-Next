import axios from 'axios';

const postgridApi = axios.create({
  baseURL: 'https://api.postgrid.com/v1',
  headers: {
    'x-api-key': `${process.env.NEXT_PUBLIC_POSTGRID_API_KEY}`,
  },
});

export default postgridApi;
