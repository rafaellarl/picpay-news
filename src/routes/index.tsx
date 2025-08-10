import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS} from './constants';
import {defaultScreenProps} from './config';
import NewsScreens from './screens/NewsScreens';

const Stack = createNativeStackNavigator();

/*
  Melhorias: Aqui pode ser adicionado um splash screen que vai ser renderizada enquanto o carregamento
  de fonts customizadas e os assets é finalizada.
*/
function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={defaultScreenProps}
      initialRouteName={SCREENS.NEWS.FEED}>
      {/* Grupo News */}
      <Stack.Group>
        <Stack.Screen
          name={SCREENS.NEWS.FEED}
          component={NewsScreens.Feed}
          options={{title: 'PicPay News'}}
        />
        <Stack.Screen
          name={SCREENS.NEWS.DETAILS}
          component={NewsScreens.Details}
        />
      </Stack.Group>

      {/* Futuros grupos */}
    </Stack.Navigator>
  );
}

export default RootStack;
