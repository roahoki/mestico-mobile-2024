import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const Button = ({ text }) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    </View>
);

const WelcomeIA = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                resizeMode="contain"
                source={{ uri: "{{logo_uri}}" }}
                style={styles.logo}
            />
            <Image
                resizeMode="contain"
                source={{ uri: "{{menu_icon_uri}}" }}
                style={styles.menuIcon}
            />
        </View>
        <Image
            resizeMode="contain"
            source={{ uri: "{{main_image_uri}}" }}
            style={styles.mainImage}
        />
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Bienvenido</Text>
            <Text style={styles.welcomeText}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                velit auctor, congue purus ut, sodales leo. Quisque auctor magna eu nisl
                tempus, id suscipit purus tempus. Quisque auctor magna eu nisl tempus,
                id suscipit purus tempus.
            </Text>
        </View>
        <View style={styles.buttonsContainer}>
            <Button text="Iniciar sesión" />
            <Button text="Registrarse" />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    logo: {
        width: 60,
        height: 60,
    },
    menuIcon: {
        width: 40,
        height: 40,
    },
    mainImage: {
        width: 300,
        height: 200,
        marginVertical: 30,
    },
    welcomeContainer: {
        backgroundColor: "#E34D95",
        borderRadius: 60,
        padding: 20,
        alignItems: "center",
        width: "90%",
    },
    welcomeTitle: {
        fontSize: 28,
        color: "#FFF",
        fontWeight: "bold",
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 16,
        color: "#FFF",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 20,
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    buttonText: {
        color: "#E34D95",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default WelcomeIA;