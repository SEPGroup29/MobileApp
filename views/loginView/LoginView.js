import React from "react";
import authValidation from "../../utils/authValidation";

import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

function LoginView({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(true);

  const buttonPressed = () => {
    navigation.navigate("QRScanner");
  };

  const validateEmail = (text) => {
    const isValid = authValidation.emailValidation(text);
    setIsEmailValid(isValid);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image
          source={require("../../assets/logo192.png")}
          style={styles.logo}
        />
        <Text style={styles.titleText}>LOGIN</Text>
        <TextInput
          style={[
            styles.textInput,
            { borderColor: isEmailValid ? "white" : "red" },
          ]}
          placeholder="Enter Email"
          placeholderTextColor="#aaa"
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
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
        <TouchableOpacity
          style={isEmailValid ? styles.loginButton : styles.loginButtonDisabled}
          onPress={buttonPressed}
          disabled={!isEmailValid}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
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
    // borderBottomColor: "white",
  },
  passwordInput: {
    top: 40,
    borderBottomColor: "white",
  },
  loginButton: {
    top: 60,
    backgroundColor: "white",
    width: "80%",
    borderRadius: 5,
  },
  loginButtonDisabled: {
    top: 60,
    backgroundColor: "white",
    width: "80%",
    borderRadius: 5,
    opacity: 0.5,
  },
  loginButtonText: {
    color: "#1F7A8C",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
});

export default LoginView;
