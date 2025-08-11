import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {TEST_IDS_COMPONENTS} from '../../constants';
import styles from './CustomHeader.styles';

interface ICustomHeaderProps {
  title?: string;
  showBackButton?: boolean;
}

const CustomHeader = ({
  title = '',
  showBackButton = true,
}: ICustomHeaderProps) => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity
          onPress={goBack}
          style={styles.backButton}
          testID={TEST_IDS_COMPONENTS.customHeader.backButton}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/images/arrow-left-white.png')}
          />
        </TouchableOpacity>
      )}

      <Text
        style={styles.title}
        testID={TEST_IDS_COMPONENTS.customHeader.title}>
        {title}
      </Text>
      <View style={styles.rightPlaceholder} />
    </View>
  );
};

export default CustomHeader;
