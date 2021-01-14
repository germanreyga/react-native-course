import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // enteredGoal and setEnteredGoal are received as binded parameters from GoalInput component
  const addGoalHandler = (enteredGoal, setEnteredGoal) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  // goalId is received as a binded parameter from GoalInput component
  const removeGoalHandler = (goalId) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId.toString());
    });
  };

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
