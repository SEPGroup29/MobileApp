import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function QRScannerView() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      {scanned && (
        <TouchableOpacity style={styles.loginButton}>
          <Button
            title={"Tap To Scan Again"}
            color="#1F7A8C"
            onPress={() => setScanned(false)}
          />
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
    height: "50%",
    width: "80%",
  },
  logo: {
    width: "20%",
    height: "10%",
    margin: 20,
  },
  loginButton: {
    top: 20,
    backgroundColor: "white",
    width: "80%",
    borderRadius: 5,
  },
});

export default QRScannerView;
