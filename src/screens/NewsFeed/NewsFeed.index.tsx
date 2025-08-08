import React from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

import { GenericError } from "../../components";

import { Card } from "./components";
import useNewsFeed from "./useNewsFeed";
import styles from './NewsFeed.styles';

const NewsFeed = () => {
    const {
        error,
        loading,
        adUnitId,
        bannerRef,
        loadedNews,
        NEWS_PER_AD,
        goToNewsDetails,
        onTryAgainGetNews,
        // MAIN_NEWS_LIST,
    } = useNewsFeed();

    const renderCards = () => {
        return loadedNews.map((news: any, index: number) => {
            const {id, title, image, publishedAt, description} = news;
            const hasAds = (index + 1) % NEWS_PER_AD === 0;
            return (
                <View key={id}>
                    <View style={styles.cardsContainer}>
                        <Card
                            title={title}
                            image={image}
                            description={description}
                            publishedAt={publishedAt}
                            actionNews={() => goToNewsDetails({title, image})}
                        />
                    </View>
                    {hasAds && (
                        <View style={styles.adsContainer}>
                            <BannerAd
                                ref={bannerRef}
                                unitId={adUnitId}
                                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                            />
                        </View>
                    )}
                </View>
            )
        });
    }

    if (loadedNews) {
        return (
            <ScrollView style={styles.container}>
                {/* TODO: Implementar carousel de notícias*/}
                {/* <MainCard
                    title={MAIN_NEWS_LIST[0].title}
                    publishedAt={MAIN_NEWS_LIST[0].publishedAt}
                    image={MAIN_NEWS_LIST[0].image}
                /> */}
                <View>
                    {renderCards()}
                </View>
                
            </ScrollView>
        )
    }
    
    // TODO: Adicionar registro de eventos de erros
    if (error) {
        <GenericError
            loading={loading}
            onTryAgain={onTryAgainGetNews}
        />
    };

    // TODO: Ve se da tempo de criar um componente skeleton
    return (
        <View style={[styles.container, styles.loadingContainer]}>
            <ActivityIndicator color="#FFFFFF" size="large"/>
        </View>
    )
};

export default NewsFeed;
