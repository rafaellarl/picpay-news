import {RouteProp} from '@react-navigation/native';

// Parâmetros específicos das rotas do módulo News
export type NewsDetailsRouteParams = {
  title: string;
  image: string;
};

// Tipos das rotas do módulo News dentro do RootStackParamList
export type NewsStackParamList = {
  NewsFeed: undefined;
  NewsDetails: NewsDetailsRouteParams;
};

// Props para uso com useRoute/RouteProp
export type NewsDetailsScreenRouteProp = RouteProp<
  NewsStackParamList,
  'NewsDetails'
>;
