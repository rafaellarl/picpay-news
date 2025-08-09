import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? 44 : 56,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 16,
  },
  backIcon: {
    width: 6,
    height: 12,
    tintColor: '#E8E8E8',
  },
  title: {
    color: '#E8E8E8',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  rightPlaceholder: {
    width: 24,
  },
});
