import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './CustomHeader.styles';

interface ICustomHeaderProps {
  title: string;
  showBackButton?: boolean;
}

const CustomHeader = ({title, showBackButton = true}: ICustomHeaderProps) => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
          <Image
            source={require('../../assets/images/arrow-left-white.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightPlaceholder} />
    </View>
  );
};

export default CustomHeader;
