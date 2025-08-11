import {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BannerAd} from 'react-native-google-mobile-ads';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {FirebaseAnalytics} from '../../../../utils';
import {ANALYTICS_SCREENS, FLOW} from '../../constants';
import {RootStackParamList} from '../../../../routes/types';
import useGetNewsApi from '../../../../api/hooks/useGetNewsApi';

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
      flow: FLOW,
      screenName: ANALYTICS_SCREENS.newsFeed.name,
      contentType: `${ANALYTICS_SCREENS.newsFeed.contentTypes.card}${id}`,
    });
    navigate('NewsDetails', {title, image});
  };

  useEffect(() => {
    FirebaseAnalytics.saveScreenView({
      screenName: ANALYTICS_SCREENS.newsFeed.name,
      flow: FLOW,
    });
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
