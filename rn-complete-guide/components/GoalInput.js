import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.goalText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  goalText: {
    width: "80%",
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: "40%",
  },
});
