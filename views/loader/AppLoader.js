import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AnimatedLottieView from "lottie-react-native";

function AppLoader() {
  return (
    <View style={[styles.absoluteFill, styles.container]}>
      <AnimatedLottieView
        source={require("../../assets/97203-loader.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    zIndex: 1,
  },
});

export default AppLoader;
