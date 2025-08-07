import api from "../config/api";
import { NEWS_ENPOINTS } from "../constants/new";

// TODO: Criar um armazenamento seguro para essa const em um arquivo .env usando a lib react-native-config
const API_KEY = 'b608140e1d1d443a8b61ab3ebb053297';

const fetchNews = async () => {
    api.get<any>(`${NEWS_ENPOINTS.GET_NEWS}${API_KEY}`);
}

export { fetchNews }; 