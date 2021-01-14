import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children, style }) => {
  return <View style={{ ...style, ...styles.card }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
