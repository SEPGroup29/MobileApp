import React from "react";
import { View, StyleSheet } from "react-native";
import LottiView from "lottie-react-native";

function AppLoader() {
  return (
    <View style={[styles.absoluteFill, styles.container]}>
      {/*<LottiView source={require("../../assets/loader.json")} autoPlay loop />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0,0.5)",
    // zIndex: 1,
  },
});

export default AppLoader;
