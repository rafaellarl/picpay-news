import {useEffect, useState} from 'react';
import {NativeAd, NativeAdEventType} from 'react-native-google-mobile-ads';

import {FirebaseAnalytics, getAdUnitId} from '../../utils';

const useNativeAds = (flow: string, screenName: string) => {
  const [nativeAd, setNativeAd] = useState<NativeAd>();
  const adUnitId = getAdUnitId('NATIVE');

  useEffect(() => {
    NativeAd.createForAdRequest(adUnitId)
      .then(setNativeAd)
      .catch(error => {
        FirebaseAnalytics.saveEventException({
          flow,
          screenName,
          description: error.message,
        });
      });
  }, [adUnitId, flow, screenName]);

  useEffect(() => {
    if (!nativeAd) return;
    const listener = nativeAd.addAdEventListener(
      NativeAdEventType.CLICKED,
      () => {
        FirebaseAnalytics.saveEventSelectAds({
          flow,
          screenName,
          idAds: nativeAd.adUnitId,
        });
      },
    );
    return () => {
      listener.remove();
    };
  }, [nativeAd, flow, screenName]);

  return {
    nativeAd,
  };
};

export default useNativeAds;
