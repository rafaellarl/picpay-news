import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './GenericError.styles';
import Button from '../Button/Button.index';

interface IGenericError {
    label?: string;
    loading: boolean;
    onTryAgain: () => void;
}

const GenericError = ({ loading, onTryAgain, label = 'Tentar novamente' }: IGenericError ) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={require('../../assets/images/x-circle.png')} />
                <Text style={styles.errorMessage}>{'Algo deu errado.'}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button label={label} onPress={onTryAgain} disabled={loading} loading={loading} variant='contained' />
            </View>
        </View>
    );
};

export default GenericError;