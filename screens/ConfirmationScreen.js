import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Confirmation = ({ route, navigation }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const { phoneNumber } = route.params;
  const inputRefs = useRef([]);
  

  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const isCodeComplete = code.every(digit => digit !== '');

  const handleConfirm = () => {
    if (code.join('') === '222222') {
      Alert.alert('Success', 'Phone number confirmed!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', 'Invalid code, please try again');
    }
  };

  const handleResendCode = () => {
    Alert.alert('Code Resent', 'A new confirmation code has been sent to your phone.');
    setCode(['', '', '', '', '', '']);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to App</Text>
      <Text style={styles.subtitle}>Enter the confirmation code sent to {phoneNumber}</Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <React.Fragment key={index}>
            {index === 3 && <View style={styles.separator} />}
            <TextInput
              ref={(ref) => inputRefs.current[index] = ref}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={text => handleChangeText(text, index)}
            />
          </React.Fragment>
        ))}
      </View>

      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>Resend the Code</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.confirmButton,
          isCodeComplete ? styles.confirmButtonActive : styles.confirmButtonInactive,
        ]}
        onPress={handleConfirm}
        disabled={!isCodeComplete}
      >
        <Text style={styles.buttonText}>Confirm</Text>
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
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  separator: {
    width: 10,
    height: 2,
    backgroundColor: '#ddd',
    alignSelf: 'center',
  },
  codeInput: {
    width: 50,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  resendText: {
    color: '#00b5ad',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  confirmButton: {
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  confirmButtonActive: {
    backgroundColor: '#30B0C7',
  },
  confirmButtonInactive: {
    backgroundColor: '#30B0C7',
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Confirmation;
