import axios from 'axios';

import {API_KEY} from '../../infra/envs';

const api = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': API_KEY,
  },
});

export default api;
