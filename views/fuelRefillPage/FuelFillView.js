import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

function FuelFillView({ navigation, route }) {
  const [fuelQuantityInput, setFuelQuantityInput] = React.useState("");
  const [fuelQuantity, setFuelQuantity] = React.useState(0);

  const updateFuel = async () => {
    if (/^\d+$/.test(fuelQuantityInput)) {
      const value = parseInt(fuelQuantityInput);
      if (value < 1 || isNaN(value)) {
        Alert.alert("Fuel Quantity must be greater than 0");
        setFuelQuantityInput("");
        setFuelQuantity(0);
      } else {
        Alert.alert("Fuel Quantity is " + value);
        setFuelQuantity(value);
      }
    } else {
      Alert.alert("Invalid Input", "Please enter a valid number");
      setFuelQuantity(0);
      setFuelQuantityInput("");
    }
  };

  useEffect(() => {}, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.heading}>{route.params.nic}</Text>
        <View style={styles.vehicleNumberContainer}>
          <Text style={[styles.heading, styles.vehicleNumber]}>
            {route.params.vehNumber}
          </Text>
        </View>
        <Text style={styles.vehicleType}>{route.params.vehType}</Text>
        <View style={styles.fuelTypeContainer}>
          <View>
            <Text style={styles.fuelTypeHeader}>Fuel Type: </Text>
          </View>
          <View>
            <Text style={styles.fuelType}>{route.params.fuelType}</Text>
          </View>
        </View>
        <View style={styles.remainingFuelQuotaContainer}>
          <View style={styles.remainingFuelQuotaLine}></View>
          <Text style={styles.remainingFuelQuotaText}>
            Requested Fuel Quota
          </Text>
          <View style={styles.remainingFuelQuotaLine}></View>
        </View>
        <Text style={styles.remainingFuelQuota}>{route.params.reqFuel} L</Text>
        <View style={styles.horizontalLine} />
        <TextInput
          style={styles.fuelAmountInput}
          placeholder="Fuel Amount"
          keyboardType="numeric"
          value={fuelQuantityInput}
          onChangeText={(text) => setFuelQuantityInput(text)}
        />
        <Text style={styles.literSign}>L</Text>
        <TouchableOpacity style={styles.refillButton} onPress={updateFuel}>
          <Text style={styles.refillButtonText}> UPDATE </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() =>
            navigation.replace("QRScanner", {
              name: route.params.poName,
              poId: route.params.poId,
            })
          }
        >
          <Text style={styles.logoutButtonText}> Scan Another QR </Text>
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
    alignContent: "center",
    backgroundColor: "#1F7A8C",
  },
  heading: {
    fontSize: 30,
    color: "white",
  },
  vehicleNumberContainer: {
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    borderRadius: 100,
    opacity: 0.8,
  },
  vehicleNumber: {
    color: "black",
  },
  vehicleType: {
    fontSize: 15,
    top: 15,
    color: "white",
  },
  fuelTypeContainer: {
    flexWrap: "nowrap",
    flexDirection: "row",
    top: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  fuelTypeHeader: {
    fontSize: 20,
    color: "white",
  },
  fuelType: {
    fontSize: 40,
    color: "orange",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  remainingFuelQuotaLine: {
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
    flex: 1,
  },
  horizontalLine: {
    top: 40,
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
  remainingFuelQuotaText: {
    backgroundColor: "#1F7A8C",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 2,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  remainingFuelQuotaContainer: {
    top: 30,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  remainingFuelQuota: {
    top: 30,
    fontSize: 50,
    fontWeight: "bold",
    color: "orange",
  },
  fuelAmountInput: {
    top: 60,
    color: "black",
    height: 80,
    fontSize: 30,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 10,
    textAlign: "center",
  },
  refillButton: {
    top: 80,
    backgroundColor: "orange",
    width: "80%",
    borderRadius: 100,
    padding: 10,
  },
  logoutButton: {
    top: 100,
    backgroundColor: "red",
    width: "80%",
    borderRadius: 100,
    padding: 10,
  },
  refillButtonText: {
    color: "#1F7A8C",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  literSign: {
    color: "black",
    fontSize: 30,
    textAlign: "right",
    paddingRight: 60,
    alignSelf: "flex-end",
  },
});

export default FuelFillView;
