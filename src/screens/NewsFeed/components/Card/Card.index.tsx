import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './Card.styles';

interface ICard {
  id: number;
  title: string;
  image: string;
  description: string;
  publishedAt: string;
  actionNews: () => void;
}

const Card = ({
  title,
  image,
  description,
  publishedAt,
  actionNews,
  id,
}: ICard) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={actionNews} testID={`test-id-card-${id}`}>
        <Image src={image} style={styles.image} />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <View style={styles.newsDateContainer}>
          <Text style={styles.newsDate}>{publishedAt}</Text>
          <TouchableOpacity
            testID={`test-id-favorite-button-card-${id}`}
            style={styles.favoriteButton}
            onPress={() =>
              console.log(`Adicionado o card ${id} aos favoritos`)
            }>
            <Image
              source={require('../../../../assets/images/favorite-icon.png')}
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
