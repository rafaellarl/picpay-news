import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './Card.styles';
import useCard from './useCard';

const favoriteIconDefault = require('../../../../assets/images/favorite-icon.png');
const favoriteIconSelected = require('../../../../assets/images/favorite-icon-selected.png');

interface ICard {
  id: number;
  title: string;
  image: string;
  description: string;
  publishedAt: string;
  actionNews: () => void;
}

const Card = ({
  id,
  title,
  image,
  actionNews,
  description,
  publishedAt,
}: ICard) => {
  const {handleNewsCardFavorite, isFavorite} = useCard(id);
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
            onPress={handleNewsCardFavorite}>
            <Image
              source={isFavorite ? favoriteIconSelected : favoriteIconDefault}
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
