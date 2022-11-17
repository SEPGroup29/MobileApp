import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import operator from "../../api/modules/operator";

function QRScannerView({ navigation, route }) {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  console.log(scanned);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);

    try {
      data = JSON.parse(data);
    } catch (error) {
      Alert.alert("Invalid QR Code", "Please scan a valid QR code", [
        { text: "OK", onPress: () => setScanned(false) },
      ]);
      return;
    }

    if (data.NIC && data.id) {
      try {
        const response = await operator.checkVehicleEligibility(
          data.id,
          route.params.poId
        );
        if (response) {
          if (response.status === 200) {
            if (response.data.error) {
              Alert.alert("Error", response.data.error, [
                { text: "OK", onPress: () => setScanned(false) },
              ]);
            } else if (response.data.result === "success") {
              const vehicles = response.data.vehicleList;
              console.log(vehicles);

              // Alert.alert("Success", "Vehicle is eligible", [
              //   { text: "OK", onPress: () => setScanned(false) },
              // ]);

              Alert.alert("Success", "Select Vehicle", [
                ...vehicles.map((vehicle) => ({
                  text: vehicle.regNo,
                  onPress: () => {
                    setScanned(false);
                    navigation.replace("FuelFill", {
                      poId: route.params.poId,
                      nic: data.NIC,
                      u_id: data.id,
                      poName: route.params.name,
                      vehNumber: vehicle.regNo,
                      reqFuel: vehicle.requestedFuel,
                      fuelType: vehicle.fuelType,
                      vehType: vehicle.vehicleType.description,
                    });
                  },
                })),
                { text: "Cancel", onPress: () => setScanned(false) },
              ]);
            }
          } else {
            Alert.alert("Connection Error", "Try again later");
          }
        }
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    } else {
      Alert.alert("Invalid QR Code", "Please scan a valid QR code", [
        {
          text: "OK",
          onPress: () => setScanned(false),
        },
      ]);
    }

    // Alert.alert("Scanned!", `ID number: ${data.NIC}`, [
    //   {
    //     text: "OK",
    //     onPress: () => {
    //       navigation.replace("FuelFill", {
    //         nic: data.NIC,
    //         u_id: data.id,
    //         poName: route.params.name,
    //       });
    //       setScanned(true);
    //     },
    //   },
    //   { text: "Cancel", onPress: () => setScanned(false) },
    // ]);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.poName}>Operator : {route.params.name}</Text>
      <Image source={require("../../assets/logo192.png")} style={styles.logo} />
      <View style={styles.qrScanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.barcode}
        />
      </View>
      <TouchableOpacity
        style={styles.scanAgainButton}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.scanAgainButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    backgroundColor: "#1F7A8C",
  },
  poName: {
    fontSize: 25,
    color: "#fff",
  },
  qrScanner: {
    borderRadius: 20,
    height: "50%",
    width: "80%",
  },
  logo: {
    width: "20%",
    height: "10%",
    margin: 20,
  },
  scanAgainButton: {
    top: 20,
    backgroundColor: "red",
    width: "80%",
    borderRadius: 5,
  },
  barcode: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  scanAgainButtonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default QRScannerView;
