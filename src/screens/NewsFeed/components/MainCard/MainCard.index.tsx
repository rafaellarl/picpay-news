/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';

const MainCard = () => {
    return (
        <View> 
            <View
                style={{
                    height: 180,
                    borderRadius: 8,
                    backgroundColor: '#E8E8E8',
                }}
            >
                <Image
                    source={require('../../../../assets/images/image-test.png')}
                />
                <View style={{ 
                    position: 'absolute',
                    bottom: 16,
                    left: 16
                 }}>
                    <Text style={{
                        color: '#8C8C8C',
                        fontSize: 10
                    }}>
                        {'Ago 06, 2025'}
                    </Text>
                    <Text style={{
                        color: '#111111',
                        fontSize: 16,
                        fontWeight: '700'
                    }}>
                        {'Notícia principal'}
                    </Text>
                </View>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: '#FFFFFF8A', marginVertical: 12 }}/>
        </View>
    );
};

export default MainCard;
