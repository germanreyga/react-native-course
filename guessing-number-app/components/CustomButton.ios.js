import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

const CustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.65}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: Fonts.primaryBold,
    fontSize: 18,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default CustomButton;
