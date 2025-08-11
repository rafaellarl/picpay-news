import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#1E1E1E',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? 44 : 56,
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
    flex: 1,
    fontSize: 16,
    color: '#E8E8E8',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  rightPlaceholder: {
    width: 24,
  },
});
