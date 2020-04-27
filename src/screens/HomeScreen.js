import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const name = "Semijacks";

  return (
    <View style={styles.view}>
      <Text style={styles.headerTextStyle}>This is my first native App!</Text>
      <Text style={styles.subheaderTextStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTextStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },

  subheaderTextStyle: {
    fontSize: 20,
  },
});

export default HomeScreen;
