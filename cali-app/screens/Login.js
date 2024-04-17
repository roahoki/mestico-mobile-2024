import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons';

import BackArrow from '../components/BackArrow';
import MestiIcon from '../components/MestiIcon';
import Checkbox from '../components/CheckBox';


export default function Login({navigation}) {
    return (
        
        <View style={styles.mainContainer}>

            <StatusBar style="auto" />

            <View style={styles.header}> 
                <TouchableOpacity onPress={() => { navigation.navigate('Welcome') }}>
                    <BackArrow style={styles.iconImage} />
                </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
                <MestiIcon style={styles.iconImage} />
                <Text style={styles.titleText}>Iniciar Sesión</Text>
                <View style={styles.midContainer}>
                    <Text style={styles.inputLabel}>Correo</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder='jota@gmail.com'
                    />
                    <Text style={styles.inputLabel}>Contraseña</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder='contraseña'
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox label="Recordar contraseña" />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signInButton} onPress={() => { console.log("Se debe navegar a otra vista"); }}>
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.containerBottomText}>
                    <Text style={styles.cuerpoBottomText}>¿Olvidó su contraseña?</Text>
                    <Text style={styles.cuerpoBottomText}> Cámbiela AQUÍ </Text>

                </View>

                <View style={styles.socialIcons}>
                    <View style={styles.iconCircle}>
                        <FontAwesomeIcon icon={faFacebook} size={20} color="white" />
                    </View>
                    <View style={styles.iconCircle}>
                        <FontAwesomeIcon icon={faXing} size={20} color="white" />
                    </View>
                    <View style={styles.iconCircle}>
                        <FontAwesomeIcon icon={faInstagram} size={20} color="white" />
                    </View>
                    <View style={styles.iconCircle}>
                        <FontAwesomeIcon icon={faLinkedin} size={20} color="white" />
                    </View>
                </View>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#E34D95',
        width: 'auto',
        flexDirection: 'column',
        alignItems: 'stretch',
        margin: 'auto',
        flex: 1,
        justifyContent: 'bottom',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginTop: 50,
        marginHorizontal: 20,

    },
    formContainer: {
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        marginTop: 'auto',
        width: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        height: '85%',
        paddingLeft: 42,
    },
    iconImage: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        marginRight: 40
    },
    midContainer: {
        width: '100%',
        marginTop: 20,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
    },
    titleText: {
        alignSelf: 'flex-start',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 1,
        marginTop: 20,
    },
    inputLabel: {
        fontWeight: "bold",
        marginVertical: 10,
        fontSize: 15,
    },
    inputField: {
        borderRadius: 100,
        borderColor: "#E1E1E1",
        borderWidth: 1,
        backgroundColor: "#FFF",
        padding: 14,
        fontSize: 15,
        color: "#CACACA",
        width: "80%",
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginTop: 20,
        alignItems: 'space-between',
        marginBottom: 20,
    },
    buttonContainer: {
        width: "90%",
        height: 45,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#E34D95',
    },
    buttonText: {
        fontSize: 15,
        color: 'white',

    },
    containerBottomText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    cuerpoBottomText: {
        fontSize: 13,
        color: 'black',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 40,
        alignItems: 'center',
    },
    iconCircle: {
        backgroundColor: '#E34D95',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerImage: {
        width: "60%",
        maxHeight: 100,
        alignSelf: "center",
        marginVertical: 24,
    },
});
