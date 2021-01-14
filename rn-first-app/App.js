import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [initText, setInitText] = useState("Open up App.js to start working");

  return (
    <View style={styles.container}>
      <Text>{initText}</Text>
      <Button title="Change text" onPress={() => setInitText("Changed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
