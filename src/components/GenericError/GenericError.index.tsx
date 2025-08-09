import React from 'react';
import {Image, Text, View} from 'react-native';

import Button from '../Button/Button.index';

import styles from './GenericError.styles';
import useGenericError, {IUseGenericError} from './useGenericError';

interface IGenericError extends IUseGenericError {
  loading: boolean;
}

const GenericError = ({
  flow,
  loading,
  onTryAgain,
  screenName,
  errorMessage,
  label = 'Tentar novamente',
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
          source={require('../../assets/images/x-circle.png')}
          testID="test-id-image-error"
        />
        <Text style={styles.errorMessage}>{'Algo deu errado.'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label={label}
          onPress={handleOnTryAgain}
          disabled={loading}
          loading={loading}
          variant="contained"
        />
      </View>
    </View>
  );
};

export default GenericError;
