import {Platform, StyleSheet} from 'react-native';

import Colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.darkGray,
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? 44 : 56,
  },
  backButton: {
    padding: 16,
  },
  backIcon: {
    width: 6,
    height: 12,
    tintColor: Colors.lightGray,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: Colors.lightGray,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  rightPlaceholder: {
    width: 24,
  },
});
