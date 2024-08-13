import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useFocusEffect(
    React.useCallback(() => {   
      return () => {
        setName('');
        setLastName('');
        setPhoneNumber('');
      };
    }, [])
  );

  const handleContinue = async () => {
    try {
      const response = await axios.post('https://run.mocky.io/v3/4b461e8b-0814-4573-aa30-ee7d354cdc54', {
        name,
        lastName,
        phoneNumber,
      });

      if (response.status === 200) {
        const { name: serverName, lastName: serverLastName, phoneNumber: serverPhoneNumber } = response.data;

        if (name === serverName && lastName === serverLastName && phoneNumber === serverPhoneNumber) {
          navigation.navigate('Confirmation', { phoneNumber });
        } else {
          Alert.alert('Error', 'Provided details do not match our records. Please register.');
        }
      } else {
        Alert.alert('Error', 'Phone number is not registered');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      Alert.alert('Error', 'Something went wrong, please try again');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to App</Text>
      <Text style={styles.subtitle}>Please enter your details.</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter last name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Do you have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </Text>
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
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  continueButton: {
    backgroundColor: '#00b5ad',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  loginLink: {
    color: '#00b5ad',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;

