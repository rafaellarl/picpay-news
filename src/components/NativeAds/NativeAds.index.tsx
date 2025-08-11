import React, {useEffect, useState} from 'react';
import {Image, Platform, Text} from 'react-native';
import {
  NativeAd,
  TestIds,
  NativeAdView,
  NativeAsset,
  NativeAssetType,
  NativeAdEventType,
} from 'react-native-google-mobile-ads';
import {useNavigation} from '@react-navigation/native';

import FirebaseAnalytics from '../../utils/FirebaseAnalytics';

import styles from './NativeAds.styles';

type NativeAdsProps = {
  flow: string;
  title?: string;
  imageSource: any;
  screenName: string;
  showTitle?: boolean;
};

const NativeAds = ({
  flow,
  title,
  screenName,
  imageSource,
  showTitle = true,
}: NativeAdsProps) => {
  const {navigate} = useNavigation();
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

  if (!nativeAd) return null;

  return (
    <NativeAdView nativeAd={nativeAd} style={styles.naviteAdsContainer}>
      {showTitle && (
        <NativeAsset assetType={NativeAssetType.IMAGE}>
          <Text style={styles.titleAds} testID="test-id-title-ads">
            {title ? title : nativeAd.headline}
          </Text>
        </NativeAsset>
      )}

      <NativeAsset assetType={NativeAssetType.IMAGE}>
        <Image
          source={
            typeof imageSource === 'string' ? {uri: imageSource} : imageSource
          }
          style={styles.imageAds}
          testID="test-id-image-ads"
        />
      </NativeAsset>
    </NativeAdView>
  );
};

export default NativeAds;
