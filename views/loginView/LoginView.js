import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

function LoginView() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image
          source={require("../../assets/logo192.png")}
          style={styles.logo}
        />
        <Text style={styles.titleText}>LOGIN</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          placeholderTextColor="#aaa"
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={[styles.textInput, styles.passwordInput]}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
