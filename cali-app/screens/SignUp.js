import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const SignUpScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    const validationErrors = {};
    if (!nombre) validationErrors.nombre = "El nombre es requerido.";
    if (!apellido) validationErrors.apellido = "El apellido es requerido.";
    if (!telefono) validationErrors.telefono = "El teléfono es requerido.";
    if (!email) {
      validationErrors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "El email no es válido.";
    }
    if (!password) validationErrors.password = "La contraseña es requerida.";
    if (password !== confirmPassword)
      validationErrors.confirmPassword = "Las contraseñas no coinciden.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      handleSubmit();
      Alert.alert("Éxito", "Registro completado exitosamente.");
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("URL_DEL_BACKEND", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          telefono,
          email,
          password,
        }),
      });

      if (response.ok) {
        // El registro se realizó exitosamente
        Alert.alert("Éxito", "Registro completado exitosamente.");
        // Aquí puedes redirigir al usuario a otra pantalla o realizar otras acciones necesarias
      } else {
        // Hubo un error en el registro
        const errorData = await response.json();
        // Maneja el error según la respuesta del backend
        console.log("Error:", errorData);
      }
    } catch (error) {
      // Maneja cualquier error de red o de otro tipo
      console.log("Error:", error);
    }
  };

  return (
    <View style={styles.mainContainer}>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Crea tu perfil
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.midContainer}> 
        
          <Text style={styles.inputLabel}>Nombre</Text>
          <TextInput
            style={[
              styles.inputField,
            ]}
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
            accessibilityLabel="Nombre"
          />
          {errors.nombre && (
            <Text style={{ color: "red", marginBottom: 10 }}>{errors.nombre}</Text>
          )}

            <Text style={styles.inputLabel}>Apellido</Text>
          <TextInput
            style={[
                styles.inputField,
            ]}
            placeholder="Apellido"
            value={apellido}
            onChangeText={setApellido}
            accessibilityLabel="Apellido"
          />
          {errors.apellido && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.apellido}
            </Text>
          )}

            <Text style={styles.inputLabel}>Teléfono</Text>
          <TextInput
            style={[
                styles.inputField,
            ]}
            placeholder="+56"
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
            accessibilityLabel="Teléfono"
          />
          {errors.telefono && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.telefono}
            </Text>
          )}

            <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={[
                styles.inputField,
            ]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            accessibilityLabel="Email"
          />
          {errors.email && (
            <Text style={{ color: "red", marginBottom: 10 }}>{errors.email}</Text>
          )}

            <Text style={styles.inputLabel}>Contraseña</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={[
                  styles.inputField,
              ]}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              accessibilityLabel="Contraseña"
            />
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#E34D95",
                padding: 5,
                borderRadius: 5,
                marginLeft: 10,
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text>{showPassword ? "Ocultar" : "Mostrar"}</Text>
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.password}
            </Text>
          )}

            <Text style={styles.inputLabel}>Repetir Contraseña</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={[
                  styles.inputField
              ]}
              placeholder="Repetir Contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              accessibilityLabel="Repetir Contraseña"
            />
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#E34D95",
                padding: 5,
                borderRadius: 5,
                marginLeft: 10,
                
              }}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Text>{showConfirmPassword ? "Ocultar" : "Mostrar"}</Text>
            </TouchableOpacity>
          </View>
          {errors.confirmPassword && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.confirmPassword}
            </Text>
          )}
          
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSignUp}
            disabled={
              !nombre ||
              !apellido ||
              !telefono ||
              !email ||
              !password ||
              !confirmPassword
            }
          >
            <Text style={styles.buttonText}>
              Registrarse
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#E34D95',
    width: 'auto',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: 'auto',
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 70,
    marginHorizontal: 20,

  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
  midContainer: {
    width: '100%',
    marginTop: 20,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    marginEnd: 20,
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
  buttonContainer: {
    width: "90%",
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#E34D95',
    top: 70,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',

  },
});


export default SignUpScreen;




