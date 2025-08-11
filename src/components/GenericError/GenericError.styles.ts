import {StyleSheet} from 'react-native';

import Colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.black,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    fontSize: 24,
    paddingTop: 16,
    fontWeight: '700',
    color: Colors.white,
  },
  buttonContainer: {
    marginVertical: 16,
  },
});
