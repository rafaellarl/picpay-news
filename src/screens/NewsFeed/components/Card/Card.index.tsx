import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './Card.styles';

const Card = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.wrapper}>
                    <Image source={require('../../../../assets/images/image-test.png')} style={styles.image} />
                    <View style={styles.newDetailsContainer}>
                        <Text style={styles.newsDetailsTitle}>{'Título da notícia'}</Text>
                        <Text style={styles.newsDetailsDescription}>{'Descrição breve da notícia'}</Text>
                    </View>
                </View>
                <View style={styles.newsDateContainer}>
                    <Text style={styles.newsDate}>{'Ago 06, 2025'}</Text>
                    <TouchableOpacity style={styles.favoriteButton}>
                        {/* Configurar para svg */}
                        <Image source={require('../../../../assets/images/favorite-icon.png')} style={styles.favoriteIcon} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Card;