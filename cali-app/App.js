import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';




import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons';

import MestiIcon from './components/MestiIcon';
import Checkbox from './components/CheckBox';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import WelcomeIA from './screens/WelcomeIA';


export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Welcome/>
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
});


