import {RouteProp} from '@react-navigation/native';

export type NewsDetailsRouteParams = {
  title: string;
  image: string;
};

export type NewsStackParamList = {
  NewsFeed: undefined;
  NewsDetails: NewsDetailsRouteParams;
};

export type NewsDetailsScreenRouteProps = RouteProp<
  NewsStackParamList,
  'NewsDetails'
>;
