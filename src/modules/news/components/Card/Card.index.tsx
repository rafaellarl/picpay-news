import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {TEST_IDS_COMPONENTS} from '../../constants';

import useCard from './useCard';
import styles from './Card.styles';

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
      <TouchableOpacity
        onPress={actionNews}
        testID={`${TEST_IDS_COMPONENTS.card.container}${id}`}>
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
            testID={`${TEST_IDS_COMPONENTS.card.favoriteIcon}${id}`}
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
