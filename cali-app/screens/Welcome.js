import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import MestiIcon from '../components/MestiIcon';

export default function Welcome({navigation}) {
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto" />
            <MestiIcon style={styles.iconImage} />
            <View style={styles.formContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Bienvenido
                    </Text>
                    <Text style={styles.bodyText}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                        velit auctor, congue purus ut, sodales leo. Quisque auctor magna eu nisl
                        tempus, id suscipit purus tempus. Quisque auctor magna eu nisl tempus,
                        id suscipit purus tempus.
                    </Text>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.signInButton} onPress={() => { navigation.navigate('Login') }}>
                            <Text style={styles.buttonText}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.signInButton} onPress={() => { navigation.navigate('SignUp') }}>
                            <Text style={styles.buttonText}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

            </View>
        
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'stretch',
        margin: 'auto',
        flex: 1,
        justifyContent: 'space-between',
    },
    iconImage: {
        alignSelf: 'center',
        width: 300,
        height: 300,
        marginHorizontal: 10,
        marginTop: 60,
    },
    formContainer: {
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: '#E34D95',
        display: 'flex',
        marginTop: 'auto',
        width: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        height: '55%',
        paddingLeft: 42,
    },
    textContainer: {
        width: '100%',
        marginTop: 50,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 40,
    
    },
    titleText: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',

    },
    bodyText: {
        fontSize: 15,
        color: '#FFFFFF',
        marginTop: 30,
        paddingRight: 30,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 100,
        position: 'absolute',

    },
    buttonContainer: {
        width: "45%",
        height: 45,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        
    },
    
});
