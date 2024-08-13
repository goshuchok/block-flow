import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/shopping.png')} style={styles.image} />

      <Text style={styles.title}>Welcome to App</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus augue. Neque at felis pulvinar malesuada varius egestas dis cras.
      </Text>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6e6e6e',
    textAlign: 'center',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#00b5ad',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  registerButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
