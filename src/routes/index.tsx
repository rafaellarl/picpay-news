import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { NewsFeed, NewsDetails } from "../screens";
import COLORS from "../assets/colors";

const defaultConfigHeader = {
    headerTintColor: COLORS.darkBackground,
    headerTitleStyle: {
        fontSize: 24,
    }
};

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="NewsFeed" screenOptions={defaultConfigHeader}>
      <Stack.Screen name="NewsFeed" component={NewsFeed} options={{ title: 'PicPay News'}} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}

export default RootStack;