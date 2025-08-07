import React, { useEffect, useRef } from "react";
import { Button, Platform, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';

import useGetNewsApi from "../../api/hooks/useGetNewsApi";


import styles from './NewsFeed.styles';
// TOODO: Melhorar essa parte deixar mais seguro
const adUnitIdTest = Platform.OS === 'ios' ? 'ca-app-pub-4128753647068732~2668177669' : 'ca-app-pub-4128753647068732~6719103316';
const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : adUnitIdTest;

const NewsFeed = () => {
    const { navigate } = useNavigation();
    const bannerRef = useRef<BannerAd>(null);
    const {
        news,
        error,
        getNews,
        loading,
    } = useGetNewsApi();

    useEffect(() => {
        if (news) {
            navigate('NewsDetails' as never)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [news]);

    useForeground(() => {
        Platform.OS === 'ios' && bannerRef.current?.load();
    });

    // TODO: Resolver problema de tipagem
    const goToNewsDetails = () => getNews();

    return (
        <View style={styles.container}>
            <Text>NewsFeed Screen</Text>
            <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
            {error && (
                <Text>{error.message}</Text>
            )}
            <Button
                disabled={loading}
                onPress={goToNewsDetails}
                title="Next Screen"
            />
        </View>
    )
};

export default NewsFeed;
