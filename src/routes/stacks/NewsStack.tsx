import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CustomHeader} from '../../components';
import {NewsFeed, NewsDetails} from '../../modules/news/screens';

import {NewsStackParamList} from '../types';
import {labels as newsLabels} from '../../modules/news/labels';

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
        options={{title: newsLabels.newsDetails.headerTitle}}
      />
    </Stack.Navigator>
  );
}
