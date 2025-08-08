import { useState } from 'react';
import { IUseGetNewApi } from '../types';
import { fetchNews } from '../resources/news.api';
import GetNewsMapper from '../mappers/GetNewsMapper';

const useGetNewsApi = (): IUseGetNewApi => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [newsList, setNewsList] = useState<any>({});

    const getNews = async () => {
        setLoading(false);
        setError(null);
        setNewsList({});

        try {
            const { data } = await fetchNews();
            const responseFormatted = GetNewsMapper.toDomain(data);
            setNewsList(responseFormatted);
        } catch (err) {
            setError(err as Error);
            // TODO: Neste momento podemos registrar os erros em ferramentas de logs voltados para o front como por exemplo o Sentry
        } finally {
            setLoading(false);
        }
    };

    return {
        newsList,
        error,
        getNews,
        loading,
    }
};

export default useGetNewsApi;
