/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from "react";
import { Platform, ScrollView, View } from "react-native";
import { BannerAd, BannerAdSize, TestIds, useForeground } from "react-native-google-mobile-ads";


import { Card, MainCard } from "./components";
import styles from './NewsFeed.styles';


const NewsFeed = () => {
    const bannerRef = useRef<BannerAd>(null);

    // TOODO: Melhorar essa parte deixar mais seguro
    const adUnitIdTest = Platform.OS === 'ios' ? 'ca-app-pub-4128753647068732~2668177669' : 'ca-app-pub-4128753647068732~6719103316';
    const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : adUnitIdTest;

    useForeground(() => {
        Platform.OS === 'ios' && bannerRef.current?.load();
    });

    return (
        <ScrollView style={styles.container}>
            <MainCard />
            <View style={{ marginBottom: 12, paddingHorizontal: 16 }}>
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
            <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
            <View style={{ marginBottom: 12, paddingHorizontal: 16 }}>
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
            <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
            <View style={{ marginBottom: 12, paddingHorizontal: 16 }}>
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
        </ScrollView>
    )
};

export default NewsFeed;
