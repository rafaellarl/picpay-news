/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './routes';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
