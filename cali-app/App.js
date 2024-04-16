import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, G } from 'react-native-svg'
const { width, height } = Dimensions.get('window');
import ButtonSignIn from './components/ButtonSignIn';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons';



export default function App() {
  return (
    <View style={styles.mainContainer}>
      
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <View style={styles.midContainer}>
        <Text style={styles.subtitulo}>Correo</Text>
        <TextInput
          style={styles.textInput}
          placeholder='jota@gmail.com'
        />
        <Text style={styles.subtitulo}>Contraseña</Text>
        <TextInput
          style={styles.textInput}
          placeholder='contraseña'
        />
      </View>
      
      
      <ButtonSignIn />
      <View style={styles.containerBottomText}>
        <Text style={styles.cuerpoBottomText}>¿Olvidó su contraseña?</Text>
        <Text style={styles.cuerpoBottomText}> Cámbiela AQUÍ </Text>
      </View>


      <View style={styles.socialIcons}>
        <FontAwesomeIcon icon={faFacebook} size={30} />
        <FontAwesomeIcon icon={faXing} size={30} />
        <FontAwesomeIcon icon={faInstagram} size={30} />
        <FontAwesomeIcon icon={faLinkedin} size={30} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  midContainer: {
    marginTop: 10,
    justifyContent: 'flex-start',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  textInput: {
    width: 200,
    height: 40,
    padding: 10,
    paddingStart: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  containerBottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  cuerpoBottomText: {
    fontSize: 12,
    color: 'black',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});
