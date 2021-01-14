import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ id, title, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onLongPress={onDelete.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default GoalItem;
