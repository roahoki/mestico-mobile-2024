import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons';


export default function App() {
    return (
        <View style={styles.container}>
            <Image source={require('./path-to-your-logo.png')} style={styles.logo} />
            <Text style={styles.titulo}>Iniciar Sesión</Text>

            <TextInput
                style={styles.input}
                placeholder="Correo"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={() => alert('Iniciando Sesión')}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.forgotPasswordText}>¿Olvidó su contraseña? Cámbiela AQUÍ</Text>
            </TouchableOpacity>

            <View style={styles.socialIcons}>
                <FontAwesomeIcon icon={faFacebook} size={30} />
                <FontAwesomeIcon icon={faXing} size={30} />
                <FontAwesomeIcon icon={faInstagram} size={30} />
                <FontAwesomeIcon icon={faLinkedin} size={30} />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150, // Adjust according to your image's aspect ratio
        height: 150, // Adjust according to your image's aspect ratio
        marginBottom: 20,
    },
    titulo: {
        fontSize: 30,
        marginBottom: 40,
        color: '#000',
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        backgroundColor: '#fff',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#E91E63',
        padding: 10,
        width: '80%',
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    forgotPasswordText: {
        color: '#E91E63',
        margin: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 20,
    },
});
