import api from '../config/api';
import {NEWS_ENPOINTS} from '../constants/new';

const fetchNews = async () => api.get<any>(`${NEWS_ENPOINTS.GET_NEWS}`);

export {fetchNews};
