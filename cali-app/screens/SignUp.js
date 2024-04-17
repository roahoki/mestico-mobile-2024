import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

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
    <View style={{ flex: 1, padding: 30 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          Crea tu perfil
        </Text>
      </View>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Nombre</Text>
      <TextInput
        style={[
          {
            borderWidth: 1,
            borderColor: errors.nombre ? "red" : "gray",
            padding: 10,
            marginBottom: 10,
            borderRadius: 25,
          },
        ]}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        accessibilityLabel="Nombre"
      />
      {errors.nombre && (
        <Text style={{ color: "red", marginBottom: 10 }}>{errors.nombre}</Text>
      )}

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Apellido</Text>
      <TextInput
        style={[
          {
            borderWidth: 1,
            borderColor: errors.apellido ? "red" : "gray",
            padding: 10,
            marginBottom: 10,
            borderRadius: 25,
          },
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

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Teléfono</Text>
      <TextInput
        style={[
          {
            borderWidth: 1,
            borderColor: errors.telefono ? "red" : "gray",
            padding: 10,
            marginBottom: 10,
            borderRadius: 25,
          },
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

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Email</Text>
      <TextInput
        style={[
          {
            borderWidth: 1,
            borderColor: errors.email ? "red" : "gray",
            padding: 10,
            marginBottom: 10,
            borderRadius: 25,
          },
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

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Contraseña</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[
            {
              flex: 1,
              borderWidth: 1,
              borderColor: errors.password ? "red" : "gray",
              padding: 10,
              marginBottom: 10,
              borderRadius: 25,
            },
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
            borderColor: "gray",
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

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Repetir Contraseña</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[
            {
              flex: 1,
              borderWidth: 1,
              borderColor: errors.confirmPassword ? "red" : "gray",
              padding: 10,
              marginBottom: 20,
              borderRadius: 25,
            },
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
            borderColor: "gray",
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
        style={{
          backgroundColor: "#FF1493",
          padding: 15,
          alignItems: "center",
          borderRadius: 25,
        }}
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
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Registrarse
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
