import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";

function LoginView() {
  const [email, setEmail] = React.useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo192.png")} style={styles.logo} />
      <Text style={styles.titleText}>LOGIN</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={[styles.textInput, styles.passwordInput]}
        placeholder="Enter Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />
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
    margin: 20,
  },
  titleText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  textInput: {
    color: "white",
    height: 40,
    fontSize: 20,
    textTransform: "lowercase",
    top: 20,
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  passwordInput: {
    top: 40,
  },
});

export default LoginView;
