/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './routes';
import firebase from '@react-native-firebase/app';

function App() {
  console.log('firebase: ', firebase.app());
  return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <RootStack />
        </SafeAreaView>
      </NavigationContainer>
  );
}

export default App;
