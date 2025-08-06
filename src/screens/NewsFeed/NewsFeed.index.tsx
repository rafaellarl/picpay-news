import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from './NewsFeed.styles';

const NewsFeed = () => {
    const navigation = useNavigation();

    // TODO: Resolver problema de tipagem
    const goToNewsDetails = () => navigation.navigate('NewsDetails' as never);

    return (
        <View style={styles.container}>
            <Text>NewsFeed Screen</Text>
            <Button
                onPress={goToNewsDetails}
                title="Next Screen"
            />
        </View>
    )
};

export default NewsFeed;
