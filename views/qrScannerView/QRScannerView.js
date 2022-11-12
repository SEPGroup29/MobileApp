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

function QRScannerView({ navigation }) {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert("Scanned!", `ID number: ${data}`, [
      {
        text: "OK",
        onPress: () => navigation.navigate("FuelFill", { id: data }),
      },
      { text: "Cancel", onPress: () => setScanned(false) },
    ]);
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
      <Image source={require("../../assets/logo192.png")} style={styles.logo} />
      <View style={styles.qrScanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.barcode}
        />
      </View>
      {scanned && (
        <TouchableOpacity
          style={styles.scanAgainButton}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.scanAgainButtonText}>Tap To Scan Again</Text>
        </TouchableOpacity>
      )}
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
    backgroundColor: "white",
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
  },
});

export default QRScannerView;
