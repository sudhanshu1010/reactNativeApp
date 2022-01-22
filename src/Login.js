import React, { useState } from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import Dashboard from './Dashboard';

const Login = ({ childToParent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(false);

  function handleInput() {
    if (!email && !password) {
      alert('Please enter email and password');
    } else if (!email) {
      alert('Enter email');
    } else if (!password) {
      alert('Enter password');
    } else {
      setIsUser(true);
    }
  }

  function myFunction() {
    childToParent(false);
  }

  function sayHello() {
    alert('Hi');
  }

  return !isUser ? (
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

      <View style={styles.buttonContainer}>
        <Button
          style={styles.submitButton}
          onPress={handleInput}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button title="Create new Account" onPress={myFunction} />
      </View>
    </View>
  ) : (
    <Dashboard />
  );
};

export default Login;

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
  buttonContainer: {
    marginTop: 20,
  }
});
