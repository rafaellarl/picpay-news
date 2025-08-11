import React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';

import {GenericError, NativeAds} from '../../../../components';

import {Card} from '../../components';

import styles from './NewsFeed.styles';
import useNewsFeed from './useNewsFeed';
import {ANALYTICS_SCREENS, FLOW} from '../../constants';
import {labels} from '../../labels';

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
          {hasAds && (
            <NativeAds
              flow={FLOW}
              title={labels.newsFeed.titleAds}
              screenName={ANALYTICS_SCREENS.newsFeed.name}
              // Imagem local
              imageSource={require('../../../../assets/images/news-picpay.png')}
              // Imagem externa com url
              // imageSource={
              //   'https://static.escolakids.uol.com.br/2025/06/ilustracao-de-um-menino-com-a-mao-na-orelha-captando-ondas-sonoras-ou-de-som.jpg'
              // }
            />
          )}
        </View>
      );
    });
  };

  if (error) {
    return (
      <GenericError
        flow={FLOW}
        loading={loading}
        errorMessage={error.message}
        onTryAgain={onTryAgainGetNews}
        screenName={ANALYTICS_SCREENS.newsFeed.name}
      />
    );
  }

  if (loadedNews.length > 0) {
    return <ScrollView style={styles.container}>{renderCards()}</ScrollView>;
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
