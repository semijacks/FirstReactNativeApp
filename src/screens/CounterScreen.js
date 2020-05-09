import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { set } from "react-native-reanimated";

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  //state === { counter: number}
  //action === { type: increase_count || decrease_count, payload: +1 || -1}

  switch (action.type) {
    case "increase_count":
      return state.counter + action.payload > 20
        ? state
        : { ...state, counter: state.counter + action.payload };
    case "decrease_count":
      return state.counter + action.payload < 0
        ? state
        : { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({ type: "increase_count", payload: COUNTER_INCREMENT })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: "decrease_count", payload: -1 * COUNTER_INCREMENT })
        }
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
