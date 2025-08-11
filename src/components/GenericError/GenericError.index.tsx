import React from 'react';
import {Image, Text, View} from 'react-native';

import Button from '../Button/Button.index';

import styles from './GenericError.styles';
import useGenericError, {IUseGenericError} from './useGenericError';
import {labels} from '../../labels';
import {TEST_IDS_COMPONENTS} from '../../constants';

interface IGenericError extends IUseGenericError {
  loading: boolean;
}

const GenericError = ({
  flow,
  loading,
  onTryAgain,
  screenName,
  errorMessage,
  label = labels.components.genericError.button,
}: IGenericError) => {
  const {handleOnTryAgain} = useGenericError({
    flow,
    label,
    screenName,
    onTryAgain,
    errorMessage,
  });
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          testID={TEST_IDS_COMPONENTS.genericError.image}
          source={require('../../assets/images/x-circle.png')}
        />
        <Text style={styles.errorMessage}>
          {labels.components.genericError.description}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label={label}
          loading={loading}
          disabled={loading}
          variant="contained"
          onPress={handleOnTryAgain}
        />
      </View>
    </View>
  );
};

export default GenericError;
