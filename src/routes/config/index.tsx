import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {CustomHeader} from '../../components';

export const defaultScreenProps = {
  header: ({route, options}: NativeStackHeaderProps) => (
    <CustomHeader
      title={options.title || route.name}
      showBackButton={route.name !== 'NewsFeed'}
    />
  ),
  contentStyle: {
    backgroundColor: '#1E1E1E',
  },
};
