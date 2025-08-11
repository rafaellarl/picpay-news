import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NewsStack} from './stacks/NewsStack';

import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="NewsFeed"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NewsFeed" component={NewsStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
