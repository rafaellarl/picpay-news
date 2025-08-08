import { Platform } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BannerAd, TestIds, useForeground } from "react-native-google-mobile-ads";

import useGetNewsApi from "../../api/hooks/useGetNewsApi";
import FirebaseAnalytics from "../../utils/FirebaseAnalytics";
import { NewsDetailsRouteParams, RootStackParamList } from "../../routes/types";

// TODO: Mock para a Carousel
const MAIN_NEWS_LIST = [
    {
        title: 'PicPay une conta PJ e PF em um único app',
        publishedAt: 'Ago 07, 2025',
        image: require('../../assets/images/one-news-picpay.png'),
        action: () => console.log('Notícia principal'),
    },
    {
        title: 'PicPay retoma sua operação de cripto',
        publishedAt: 'Jul 17, 2025',
        image: require('../../assets/images/two-news-picpay.png'),
        action: () => console.log('Notícia principal')
    },
    {
        title: 'PicPay lança previdência privada no app',
        publishedAt: 'Mar 27, 2025',
        image: require('../../assets/images/three-news-picpay.png'),
        action: () => console.log('Notícia principal')
    }
];

const NEWS_PER_AD = 5;

const useNewsFeed = () => {
    const { getNews, newsList, error, loading } = useGetNewsApi();
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const bannerRef = useRef<BannerAd>(null);
    // TODO: Ajustar tipagem
    const [loadedNews, setLoadedNews] = useState<any>([]);
    // TOODO: Melhorar essa parte deixar mais seguro
    const adUnitIdTest = Platform.OS === 'ios' ? 'ca-app-pub-4128753647068732~2668177669' : 'ca-app-pub-4128753647068732~6719103316';
    const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : adUnitIdTest;

    const onTryAgainGetNews = () => {
        console.log('Passou aqui');
    };

    const goToNewsDetails = ({image, title}: NewsDetailsRouteParams) => {
        // TODO: Adicionar evento de click
        navigate('NewsDetails', { title, image})
    };

    useForeground(() => {
        Platform.OS === 'ios' && bannerRef.current?.load();
    });

    useEffect(() => {
        FirebaseAnalytics.saveScreenView({ screenName: 'new-feed', flow: 'news'});
        getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (newsList && newsList.length > 0) {
            setLoadedNews(newsList);
        }
    }, [newsList]);

    return {
        error,
        loading,
        adUnitId,
        bannerRef,
        loadedNews,
        NEWS_PER_AD,
        MAIN_NEWS_LIST,
        goToNewsDetails,
        onTryAgainGetNews,
    };
};

export default useNewsFeed;
