/* eslint-disable react/no-unstable-nested-components */
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { CustomHeader } from "../components";
import { NewsFeed, NewsDetails } from "../screens";
 
import { RootStackParamList } from "./types";


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="NewsFeed"
      screenOptions={{
        header: ({ route, options }) => (
          <CustomHeader
            title={options.title || route.name}
            showBackButton={route.name !== 'NewsFeed'}
          />
        ),
        contentStyle: {
          backgroundColor: '#1E1E1E',
        },
      }}
    >
      <Stack.Screen name="NewsFeed" component={NewsFeed} options={{ title: 'PicPay News'}} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}

export default RootStack;