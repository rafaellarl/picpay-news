import {Platform} from 'react-native';
import {useEffect, useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import {BannerAd, useForeground} from 'react-native-google-mobile-ads';

import {ANALYTICS_SCREENS, FLOW} from '../../constants/analytics';
import {NewsDetailsScreenRouteProps} from '../../../../routes/types';
import {FirebaseAnalytics, getAdUnitId} from '../../../../utils';

const useNewsDetails = () => {
  const {
    params: {image, title},
  } = useRoute<NewsDetailsScreenRouteProps>();
  const adUnitId = getAdUnitId('ADAPTIVE_BANNER');
  const bannerRef = useRef<BannerAd>(null);

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  useEffect(() => {
    FirebaseAnalytics.saveScreenView({
      flow: FLOW,
      screenName: ANALYTICS_SCREENS.newsDetails.name,
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
