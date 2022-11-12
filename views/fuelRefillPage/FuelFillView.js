import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

function FuelFillView() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>672923076V</Text>
      <View style={styles.vehicleNumberContainer}>
        <Text style={[styles.heading, styles.vehicleNumber]}>AXQ-6484</Text>
      </View>
      <Text style={styles.vehicleType}>Motor Bike - Petrol</Text>
      <View style={styles.fuelTypeContainer}>
        <View>
          <Text style={styles.fuelTypeHeader}>Fuel Type: </Text>
        </View>
        <View>
          <Text style={styles.fuelType}>Petrol</Text>
        </View>
      </View>
    </SafeAreaView>
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
    borderRadius: "100%",
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
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 1,
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
});

export default FuelFillView;
