import React from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native";

const ImageHeader = ({ source }) => (
    <Image resizeMode="contain" source={{ uri: source }} style={styles.headerImage} />
);

const InputField = ({ label, keyboardType = "default" }) => (
    <View>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
            style={styles.inputField}
            keyboardType={keyboardType}
            placeholder={label}
            aria-label={label}
        />
    </View>
);

export default function MyComponent() {
    const headerImages = [
        { id: 1, uri: "{{headerImage1Uri}}" },
        { id: 2, uri: "{{headerImage2Uri}}" },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {headerImages.map(({ id, uri }) => (
                    <ImageHeader key={id} source={uri} />
                ))}
            </View>
            {/* <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/64039bbfcf3bc8f44526a68e4eb8071d0eeed3cf1e8f0188e87f546be0dbca4f?apiKey=048adb15bd2741f798f1e3d6358f20bd&", }} style={styles.centerImage} /> */}
            <View style={styles.formContainer}>
                {/* <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c618c4d322e2cc74ad91676fcae44bb1a5d9471be09f64f2545cab48ead0f7f?apiKey=048adb15bd2741f798f1e3d6358f20bd&", }} style={styles.logoImage} /> */}
                <Text style={styles.titleText}>Iniciar Sesión</Text>
                <InputField label="Correo" keyboardType="email-address" />
                <InputField label="Contraseña" keyboardType="default" />
                <View style={styles.checkboxContainer}>
                    <View style={styles.checkbox} />
                    <Text>Recordar contraseña</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>
                        ¿Olvido su contraseña? <Text style={styles.forgotPasswordLink}>Cámbiela AQUÍ</Text>
                    </Text>
                </TouchableOpacity>
                <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4331c60921a655720fa43004b0784422c8cd42f4469e73736233384c98f838ef?apiKey=048adb15bd2741f798f1e3d6358f20bd&", }} style={styles.footerImage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E34D95",
        display: "flex",
        maxWidth: 480,
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        margin: "0 auto",
    },
    header: {
        justifyContent: "space-between",
        alignItems: "stretch",
        display: "flex",
        width: "100%",
        gap: 20,
        padding: "10px 21px 10px 27px",
    },
    headerImage: {
        width: 100,
        height: 50,
    },
    centerImage: {
        width: "60%",
        maxHeight: 100,
        alignSelf: "center",
        marginVertical: 24,
    },
    formContainer: {
        borderRadius: 60,
        backgroundColor: "#FFF",
        display: "flex",
        marginTop: 40,
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        padding: 42,
    },
    logoImage: {
        alignSelf: "center",
        width: 160,
        height: 108,
    },
    titleText: {
        textAlign: "center",
        marginTop: 60,
        fontSize: 28,
        fontWeight: "700",
        fontFamily: "Montserrat",
    },
    inputLabel: {
        fontFamily: "Montserrat",
        fontWeight: "600",
        marginVertical: 10,
    },
    inputField: {
        borderRadius: 99,
        borderColor: "#E1E1E1",
        borderWidth: 1,
        backgroundColor: "#FFF",
        padding: 14,
        fontSize: 16,
        color: "#CACACA",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderColor: "#49453F",
        marginRight: 10,
    },
    forgotPasswordText: {
        textAlign: "center",
        marginTop: 30,
    },
    forgotPasswordLink: {
        fontWeight: "bold",
    },
    footerImage: {
        alignSelf: "center",
        marginVertical: 38,
        width: 211,
        height: 34,
    },
});