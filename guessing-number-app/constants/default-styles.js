import { Dimensions, StyleSheet } from 'react-native';
import Colors from './colors';
import Fonts from './fonts';

export default StyleSheet.create({
  bodyText: {
    fontFamily: Fonts.primaryDefault,
    fontSize: Dimensions.get('window').height < 400 ? 12 : 20,
  },
  title: {
    fontFamily: Fonts.primaryBold,
    fontSize: 18,
    color: Colors.primaryText,
  },
  header: {
    fontFamily: Fonts.primaryBold,
    fontSize: 18,
    color: Colors.primaryText,
  },
});
