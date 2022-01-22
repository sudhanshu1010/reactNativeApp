import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import Login from './Login';

const Signup = ({ childToParent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [registered, setRegistered] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  function myFunction() {
    childToParent(true);
  }

  const handleInput = () => {
    if (email !== null && !password !== null) {
      alert('Successful registration');
      setRegistered(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email..."
        onChangeText={(e) => setEmail(e)}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Enter your password..."
        onChangeText={(e) => setPassword(e)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Enter your password..."
        onChangeText={(e) => setCheckPassword(e)}
      />
      <Button
        style={styles.submitButton}
        title="Sign up"
        color="#841584"
        onPress={handleInput}
      />

      <Button title="Already have an account?" onPress={myFunction} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    marginBottom: 10,
    height: 40,
    width: 300,
    borderColor: '#7a42f4',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    marginBottom: 15,
    height: 40,
  },
});
