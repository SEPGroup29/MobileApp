import React from "react";
import { Text, View, StyleSheet } from "react-native";

function FuelFillView() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>672923076V</Text>
      <View style={styles.vehicleNumberContainer}>
        <Text style={[styles.heading, styles.vehicleNumber]}>AXQ-6484</Text>
      </View>
      <Text style={styles.vehicleType}>Motor Bike</Text>
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
});

export default FuelFillView;
