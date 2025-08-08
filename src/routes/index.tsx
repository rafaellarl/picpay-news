import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { NewsFeed, NewsDetails } from "../screens";
 
import { RootStackParamList } from "./types";

const defaultConfigHeader = {
    headerTintColor: '#E8E8E8',
    headerStyle: {
      backgroundColor: '#1E1E1E'
    },
    headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700' as const,
    }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="NewsFeed" screenOptions={defaultConfigHeader}>
      <Stack.Screen name="NewsFeed" component={NewsFeed} options={{ title: 'PicPay News'}} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}

export default RootStack;