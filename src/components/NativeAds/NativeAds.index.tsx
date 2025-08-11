import React from 'react';
import {Image, Text} from 'react-native';
import {
  NativeAsset,
  NativeAdView,
  NativeAssetType,
} from 'react-native-google-mobile-ads';

import {TEST_IDS_COMPONENTS} from '../../constants';

import styles from './NativeAds.styles';
import useNativeAds from './useNativeAds';

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
  const {nativeAd} = useNativeAds(flow, screenName);

  if (!nativeAd) return null;

  return (
    <NativeAdView nativeAd={nativeAd} style={styles.naviteAdsContainer}>
      {showTitle && (
        <NativeAsset assetType={NativeAssetType.IMAGE}>
          <Text
            style={styles.titleAds}
            testID={TEST_IDS_COMPONENTS.nativeAds.title}>
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
          testID={TEST_IDS_COMPONENTS.nativeAds.image}
        />
      </NativeAsset>
    </NativeAdView>
  );
};

export default NativeAds;
