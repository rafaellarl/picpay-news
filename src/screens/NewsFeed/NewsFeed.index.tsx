import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

import {GenericError} from '../../components';

import {Card} from './components';
import useNewsFeed from './useNewsFeed';
import styles from './NewsFeed.styles';

// TODO: Criar componente global de anúncio usando o NativAds disponível na documentaçao.
// DOC: https://docs.page/invertase/react-native-google-mobile-ads/native-ads
const NewsFeed = () => {
  const {
    error,
    loading,
    bannerRef,
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
        <View>{renderCards()}</View>
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
