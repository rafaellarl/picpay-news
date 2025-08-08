import { RouteProp } from "@react-navigation/native";

// Types principais de todas as todas do app
export type RootStackParamList = {
    NewsFeed: undefined;
    NewsDetails: NewsDetailsRouteParams;
};

// Types específicos por tela
export type NewsDetailsRouteParams = {
    title: string;
    image: string;
};

// Types prontos para serem usados no useRoute/RouteProp
export type NewsDetailsScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetails'>;