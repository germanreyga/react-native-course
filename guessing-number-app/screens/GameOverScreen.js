import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import fonts from '../constants/fonts';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>The game is over!</Text>

        <Image
          //source={require('../assets/img/success.png')}
          source={{
            uri:
              'https://www.success.com/wp-content/uploads/2019/12/How-to-Align-Your-Career-With-Your-Personal-Definition-of-Success.jpg',
          }}
          style={styles.image}
          fadeDuration={300}
          resizeMode="cover"
        />

        <Text style={styles.resultContainer}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess your number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>

        <CustomButton onPress={onRestart}>NEW GAME</CustomButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: Colors.primary,
    marginVertical: Dimensions.get('window').height / 30,
  },
  resultContainer: {
    marginVertical: Dimensions.get('window').height / 60,
    marginHorizontal: 40,
    textAlign: 'center',
    ...DefaultStyles.bodyText,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: fonts.primaryBold,
  },
});

export default GameOverScreen;
