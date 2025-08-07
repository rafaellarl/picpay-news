import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import useGetNewsApi from "../../api/hooks/useGetNewsApi";

import styles from './NewsFeed.styles';

const NewsFeed = () => {
    const { navigate } = useNavigation();
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

    // TODO: Resolver problema de tipagem
    const goToNewsDetails = () => getNews();

    return (
        <View style={styles.container}>
            <Text>NewsFeed Screen</Text>
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
