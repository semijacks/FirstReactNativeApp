import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  boxOneStyle: {
    width: 100,
    height: 100,
    backgroundColor: "pink",
  },
  boxTwoStyle: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    alignSelf: "flex-end",
  },
  boxThreeStyle: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
