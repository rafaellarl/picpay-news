import React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';

import {GenericError, NativeAds} from '../../components';

import {Card} from './components';
import useNewsFeed from './useNewsFeed';
import styles from './NewsFeed.styles';

// TODO: Anuncios
const mockAd = [
  {
    imageUrl: require('../../assets/images/two-news-picpay.png'),
    url: 'https://blog.picpay.com/conta-pj-pf-app/',
  },
  {
    imageUrl: require('../../assets/images/two-news-picpay.png'),
    url: 'https://blog.picpay.com/como-investir-tesouro-direto/',
  },
  {
    imageUrl: require('../../assets/images/three-news-picpay.png'),
    url: 'https://blog.picpay.com/operacao-cripto/',
  },
];

const NewsFeed = () => {
  const {
    error,
    loading,
    loadedNews,
    NEWS_PER_AD,
    goToNewsDetails,
    onTryAgainGetNews,
  } = useNewsFeed();

  const renderCards = () => {
    return loadedNews.map((news: any, index: number) => {
      const {id, title, image, publishedAt, description} = news;
      const hasAds = (index + 1) % NEWS_PER_AD === 0;
      return (
        <View key={id}>
          <View style={styles.cardsContainer}>
            <Card
              id={id}
              title={title}
              image={image}
              description={description}
              publishedAt={publishedAt}
              actionNews={() => goToNewsDetails(image, title, id)}
            />
          </View>
        </View>
      );
    });
  };

  // TODO: Adicionar registro de eventos de erros
  if (error) {
    return (
      <GenericError
        flow="news"
        loading={loading}
        screenName="news-feed"
        errorMessage={error.message}
        onTryAgain={onTryAgainGetNews}
      />
    );
  }

  if (loadedNews.length > 0) {
    return (
      <ScrollView style={styles.container}>
        <NativeAds flow={'news'} screenName={'news-feed'}></NativeAds>
        {renderCards()}
      </ScrollView>
    );
  }

  /*
    Sugestão: Implementar componente Skeleton Screen para uma experiência de loading mais fluida e profissional.
  */
  return (
    <View style={[styles.container, styles.loadingContainer]}>
      <ActivityIndicator
        color="#FFFFFF"
        size="large"
        testID="test-id-loading"
      />
    </View>
  );
};

export default NewsFeed;
