import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  useFocusEffect(
    React.useCallback(() => {   
      return () => {    
        setPhoneNumber('');
      };
    }, [])
  );

  const handleLogin = () => {
    if (phoneNumber === '+1234567890') {
      Alert.alert('Success', 'You are authorized!');
    } else {
      Alert.alert('Error', 'Invalid phone number. Please register.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to App</Text>
      <Text style={styles.instructionText}>Please enter your details.</Text>
      
      <Text style={styles.label}>Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="+1234567890"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
      <Text style={styles.signUpText}>
        Don't have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('Register')}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', 
  },
  welcomeText: {
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 18, 
    color: '#666',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 12, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8, 
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#30B0C7',
    borderRadius: 8, 
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18, 
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 16, 
    color: '#666',
  },
  signUpLink: {
    color: '#30B0C7',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
