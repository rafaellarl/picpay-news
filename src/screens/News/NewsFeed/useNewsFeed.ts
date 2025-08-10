import {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BannerAd} from 'react-native-google-mobile-ads';

import useGetNewsApi from '../../../api/hooks/useGetNewsApi';
import FirebaseAnalytics from '../../../utils/FirebaseAnalytics';
import {RootStackParamList} from '../../../routes/types';

const NEWS_PER_AD = 5;

const useNewsFeed = () => {
  const {getNews, newsList, error, loading} = useGetNewsApi();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const bannerRef = useRef<BannerAd>(null);
  // TODO: Ajustar tipagem
  const [loadedNews, setLoadedNews] = useState<any>([]);
  const onTryAgainGetNews = () => {
    getNews();
  };

  const goToNewsDetails = (image: string, title: string, id: number) => {
    FirebaseAnalytics.saveSelectContent({
      screenName: 'new-feed',
      flow: 'news',
      contentType: `news-card-${id}`,
    });
    navigate('NewsDetails', {title, image});
  };

  useEffect(() => {
    FirebaseAnalytics.saveScreenView({screenName: 'new-feed', flow: 'news'});
    getNews();
  }, []);

  useEffect(() => {
    if (newsList && newsList.length > 0) {
      setLoadedNews(newsList);
    }
  }, [newsList]);

  return {
    error,
    loading,
    bannerRef,
    loadedNews,
    NEWS_PER_AD,
    goToNewsDetails,
    onTryAgainGetNews,
  };
};

export default useNewsFeed;
