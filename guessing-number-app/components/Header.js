import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={{ ...DefaultStyles.header, ...styles.title }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingTop: 36,
    alignItems: 'center',
    /* OPTION 1: */
    /*
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,*/
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
  },
});

export default Header;
