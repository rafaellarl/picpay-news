import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS} from '../constants';
import {NewsDetails, NewsFeed} from '../../screens';

const Stack = createNativeStackNavigator();

export const NewsRouteGroup = () => (
  <Stack.Group screenOptions={{headerShown: true}}>
    <Stack.Screen
      name={SCREENS.NEWS.FEED}
      component={NewsFeed}
      options={{title: 'PicPay News'}}
    />
    <Stack.Screen
      name={SCREENS.NEWS.DETAILS}
      component={NewsDetails}
      options={{title: 'Detalhes da Notícia'}}
    />
  </Stack.Group>
);
