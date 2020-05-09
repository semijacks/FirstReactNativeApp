import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.headerTextStyle}>This is my first native App!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to ImageScreen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Input Demo"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Model Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 30,
  },

  subheaderTextStyle: {
    fontSize: 20,
  },
});

export default HomeScreen;
