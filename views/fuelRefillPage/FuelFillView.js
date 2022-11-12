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
      <View style={styles.remainingFuelQuotaContainer}>
        <View style={styles.remainingFuelQuotaLine}></View>
        <Text style={styles.remainingFuelQuotaText}>Remaining Fuel Quota</Text>
        <View style={styles.remainingFuelQuotaLine}></View>
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
  remainingFuelQuotaText: {
    backgroundColor: "#1F7A8C",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 2,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "auto",
  },
  remainingFuelQuotaContainer: {
    top: 30,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
  },
});

export default FuelFillView;
