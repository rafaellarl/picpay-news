import {StyleSheet} from 'react-native';

import Colors from '../../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: Colors.black,
  },
  cardsContainer: {
    paddingHorizontal: 16,
  },
  loadingContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});
