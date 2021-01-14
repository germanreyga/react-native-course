import { Ionicons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

const renderListItem = (listLength, itemData) => {
  return (
    <View
      style={itemData.index % 2 ? styles.roundListItem1 : styles.roundListItem2}
    >
      <Text>#{listLength - itemData.index}</Text>
      <Text>{itemData.item}</Text>
    </View>
  );
};

const GameScreen = ({ userChoice, onGameOver }) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width
  );
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get('window').height
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setDeviceWidth(Dimensions.get('window').width);
      setDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextRandNum = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextRandNum);

    setPastGuesses((currPastGuesses) => [
      nextRandNum.toString(),
      ...pastGuesses,
    ]);
  };

  if (deviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text>Opponent's Guess</Text>

        <View style={styles.controls}>
          <CustomButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="caret-down-outline" size={24} color="white" />
          </CustomButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <CustomButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="caret-up-outline" size={24} color="white" />
          </CustomButton>
        </View>

        <View style={styles.listContainer}>
          {/* Option 1: ScrollView*/}
          {/*<ScrollView contentContainerStyle={styles.list}>
            {pastGuesses.map((guess, index) =>
              renderListItem(guess, pastGuesses.length - index)
            )}
          </ScrollView>*/}

          {/* Option 2: FlatList */}
          <FlatList
            keyExtractor={(item) => item}
            data={pastGuesses}
            renderItem={renderListItem.bind(this, pastGuesses.length)}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
        <CustomButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="caret-down-outline" size={24} color="white" />
        </CustomButton>
        <CustomButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name="caret-up-outline" size={24} color="white" />
        </CustomButton>
      </Card>

      <View style={styles.listContainer}>
        {/* Option 1: ScrollView*/}
        {/*<ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>*/}

        {/* Option 2: FlatList */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: 400,
    maxWidth: '90%',
  },
  roundListItem1: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 14,
    width: '100%',
  },
  roundListItem2: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.accent,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 14,
    width: '100%',
  },
  listContainer: {
    width: Dimensions.get('window').width > 350 ? '60%' : '80%',
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
  },
});

export default GameScreen;
