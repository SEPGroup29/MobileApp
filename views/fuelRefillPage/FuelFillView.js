import React from "react";
import { Text, View, StyleSheet } from "react-native";

function FuelFillView() {
  return (
    <View style={style.container}>
      <Text>YAS GRAFIX</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F7A8C",
  },
});

export default FuelFillView;
