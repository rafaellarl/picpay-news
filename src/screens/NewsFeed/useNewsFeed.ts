import {Platform} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BannerAd, TestIds, useForeground} from 'react-native-google-mobile-ads';

import useGetNewsApi from '../../api/hooks/useGetNewsApi';
import FirebaseAnalytics from '../../utils/FirebaseAnalytics';
import {RootStackParamList} from '../../routes/types';

const NEWS_PER_AD = 5;

const useNewsFeed = () => {
  const {getNews, newsList, error, loading} = useGetNewsApi();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const bannerRef = useRef<BannerAd>(null);
  // TODO: Ajustar tipagem
  const [loadedNews, setLoadedNews] = useState<any>([]);
  // TOODO: Melhorar essa parte deixar mais seguro
  const adUnitIdTest =
    Platform.OS === 'ios'
      ? 'ca-app-pub-4128753647068732~2668177669'
      : 'ca-app-pub-4128753647068732~6719103316';
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : adUnitIdTest;

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

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

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
    adUnitId,
    bannerRef,
    loadedNews,
    NEWS_PER_AD,
    goToNewsDetails,
    onTryAgainGetNews,
  };
};

export default useNewsFeed;
