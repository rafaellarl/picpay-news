import {useEffect, useRef} from 'react';
import {Platform} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {BannerAd, TestIds, useForeground} from 'react-native-google-mobile-ads';

import {NewsDetailsScreenRouteProp} from '../../../routes/types/newsTypes';
import FirebaseAnalytics from '../../../utils/FirebaseAnalytics';

const useNewsDetails = () => {
  const {
    params: {image, title},
  } = useRoute<NewsDetailsScreenRouteProp>();
  // TOODO: Melhorar essa parte deixar mais seguro
  const adUnitIdTest =
    Platform.OS === 'ios'
      ? 'ca-app-pub-4128753647068732~2668177669'
      : 'ca-app-pub-4128753647068732~6719103316';
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : adUnitIdTest;
  const bannerRef = useRef<BannerAd>(null);

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  useEffect(() => {
    FirebaseAnalytics.saveScreenView({
      flow: 'new',
      screenName: 'new-details',
    });
  }, []);

  return {
    image,
    title,
    adUnitId,
    bannerRef,
  };
};

export default useNewsDetails;
