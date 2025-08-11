import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CustomHeader} from '../../components';
import {NewsDetails, NewsFeed} from '../../screens';

import {NewsStackParamList} from '../types';

const Stack = createNativeStackNavigator<NewsStackParamList>();

export function NewsStack() {
  return (
    <Stack.Navigator
      initialRouteName="NewsFeed"
      screenOptions={{
        header: ({route, options, back}) => (
          <CustomHeader
            title={options.title || route.name}
            showBackButton={back !== undefined}
          />
        ),
        contentStyle: {
          backgroundColor: '#1E1E1E',
        },
      }}>
      <Stack.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{title: 'PicPay News'}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{title: 'Detalhes da notícia'}}
      />
    </Stack.Navigator>
  );
}
