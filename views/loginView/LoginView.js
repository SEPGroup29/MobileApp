import React from 'react';
import {Text, View, StyleSheet} from "react-native";

function LoginView() {
    return (
        <View style={styles.container}>
            <Text>LoginView</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default LoginView;