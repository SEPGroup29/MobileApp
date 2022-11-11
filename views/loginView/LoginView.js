import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function LoginView() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo192.png")} style={styles.logo} />
      <Text>LoginView</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F7A8C",
  },
  logo: {
    width: "20%",
    height: "10%",
    margin: 10,
  },
});

export default LoginView;
