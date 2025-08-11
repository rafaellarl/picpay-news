import {useState} from 'react';

import {INews, IUseGetNewApi} from '../types';
import {fetchNews} from '../resources/news.api';
import GetNewsMapper from '../mappers/GetNewsMapper';

const useGetNewsApi = (): IUseGetNewApi => {
  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const getNews = async () => {
    setLoading(false);
    setError(null);
    setNewsList([]);
    try {
      const {data} = await fetchNews();
      const responseFormatted = GetNewsMapper.toDomain(data);
      setNewsList(responseFormatted);
    } catch (err) {
      setError(err as Error);
      /*
        Melhorias: Neste momento 'podemos' registrar os erros em ferramentas de logs
        voltados para o front como por exemplo o Sentry
      */
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    getNews,
    loading,
    newsList,
  };
};

export default useGetNewsApi;
