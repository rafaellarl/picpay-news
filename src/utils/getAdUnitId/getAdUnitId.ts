import {Platform} from 'react-native';
import {TestIds} from 'react-native-google-mobile-ads';

import {AD_UNIT_ID_TEST_ANDROID, AD_UNIT_ID_TEST_IOS} from '../../infra/envs';

const getAdUnitIdTest = (testIdKey: keyof typeof TestIds): string => {
  const adUnitIdTest =
    Platform.OS === 'ios' ? AD_UNIT_ID_TEST_IOS : AD_UNIT_ID_TEST_ANDROID;
  return __DEV__ ? TestIds[testIdKey]! : adUnitIdTest;
};

export default getAdUnitIdTest;
