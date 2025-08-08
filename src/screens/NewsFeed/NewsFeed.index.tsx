import React from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

import { GenericError } from "../../components";

import { Card, MainCard } from "./components";
import useNewsFeed from "./useNewsFeed";
import styles from './NewsFeed.styles';

const NewsFeed = () => {
    const {
        error,
        loading,
        adUnitId,
        bannerRef,
        loadedNews,
        onTryAgain,
        NEWS_PER_AD,
        MAIN_NEWS_LIST,
    } = useNewsFeed();

    const renderCards = () => {
        return loadedNews.map((news: any, index: number) => {
            const hasAds = (index + 1) % NEWS_PER_AD === 0;
            return (
                <View key={news.id}>
                    <View style={styles.cardsContainer}>
                        <Card
                            title={news.title}
                            image={news.image}
                            description={news.description}
                            publishedAt={news.publishedAt}
                            actionNews={() => console.log('Navega pra tela de detalhes')}
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
                <MainCard
                    title={MAIN_NEWS_LIST[0].title}
                    publishedAt={MAIN_NEWS_LIST[0].publishedAt}
                    image={MAIN_NEWS_LIST[0].image}
                />
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
            onTryAgain={onTryAgain}
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
