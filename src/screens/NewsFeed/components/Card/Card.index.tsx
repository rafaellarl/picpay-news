import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './Card.styles';

interface ICard {
    title: string;
    image: string;
    description: string;
    publishedAt: string;
    actionNews: () => void;
}

const Card = ({ title, image, description, publishedAt, actionNews }: ICard) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={actionNews}>
                <Image src={image} style={styles.image} />
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{title}</Text>
                <Text numberOfLines={2} style={styles.description}>{description}</Text>
                <View style={styles.newsDateContainer}>
                    <Text style={styles.newsDate}>{publishedAt}</Text>
                    {/* TODO: Colocar funcionalidade de adicionar aos favoritos */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={() => console.log('Add aos favoritos')}>
                        {/* TODO: Configurar para svg */}
                        <Image source={require('../../../../assets/images/favorite-icon.png')} style={styles.favoriteIcon} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Card;