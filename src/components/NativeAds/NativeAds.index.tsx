import React, {useEffect, useState} from 'react';
import {Image, Platform, Text} from 'react-native';
import {
  NativeAd,
  NativeAdEventType,
  NativeAdView,
  NativeAsset,
  NativeAssetType,
  NativeMediaView,
  TestIds,
} from 'react-native-google-mobile-ads';
import FirebaseAnalytics from '../../utils/FirebaseAnalytics';

const NativeAds = ({flow, screenName, children}: any) => {
  const [nativeAd, setNativeAd] = useState<NativeAd>();
  const adUnitIdTest =
    Platform.OS === 'ios'
      ? 'ca-app-pub-4128753647068732~2668177669'
      : 'ca-app-pub-4128753647068732~6719103316';
  const adUnitId = __DEV__ ? TestIds.NATIVE : adUnitIdTest;

  useEffect(() => {
    NativeAd.createForAdRequest(adUnitId)
      .then(setNativeAd)
      .catch(error => {
        /*
          Melhoria: Integrar com ferramentas de análises de erro para o front como por exemplo o Sentry
        */
        FirebaseAnalytics.saveEventException({
          flow,
          screenName,
          description: error.message,
        });
      });
  }, []);

  useEffect(() => {
    if (!nativeAd) return;
    const listener = nativeAd.addAdEventListener(
      NativeAdEventType.CLICKED,
      () => {
        console.log('nativeAd: ', nativeAd);
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
  }, [nativeAd]);

  if (!nativeAd) {
    return null;
  }

  return (
    <NativeAdView
      nativeAd={nativeAd}
      style={{
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
      }}>
      {/* Titulo */}
      <NativeAsset assetType={NativeAssetType.IMAGE}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {nativeAd.headline}
        </Text>
      </NativeAsset>
      {/* Imagem personalizada */}
      <NativeAsset assetType={NativeAssetType.IMAGE}>
        <Image
          source={require('../../assets/images/two-news-picpay.png')}
          testID="test-id-image-ads"
          style={{borderRadius: 8, height: 120, width: '100%'}}
        />
      </NativeAsset>
    </NativeAdView>
  );
};

export default NativeAds;
