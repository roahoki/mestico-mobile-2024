import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonSignIn() {
    return (
        <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: 'white',
    },
    button: {
        width: 200,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});