import { useState } from 'react';
import { fetchNews } from '../resources/news.api';

// TODO: Ajustar tipagem do news
interface IUseGetNewApi {
    news: any,
    error: Error | null;
    loading: boolean;
    getNews: () => Promise<any>
}

const useGetNewsApi = (): IUseGetNewApi => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [news, setNews] = useState<any>({});

    const getNews = async () => {
        setLoading(false);
        setError(null);
        setNews({});

        try {
            const newsResponse = await fetchNews();
            // TODO: Adicionar um mapper para salvar no state os valores formatados e assim centralizar a normalização dos dados
            // TODO: O retorno esta vindo em vários idomas, verificar uma forma de trazer apenas em portugues
            setNews(newsResponse);
        } catch (err) {
            setError(err as Error);
            // TODO: Neste momento podemos registrar os erros em ferramentas de logs voltados para o front como por exemplo o Sentry
        } finally {
            setLoading(false);
        }
    };

    return {
        news,
        error,
        getNews,
        loading,
    }
};

export default useGetNewsApi;
