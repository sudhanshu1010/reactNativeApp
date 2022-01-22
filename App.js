// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Login from './components/src/Login';
import Signup from './components/src/Signup.js';
import Dashboard from './components/src/Dashboard'

export default function App() {
  const [user, setUser] = useState(true);

  const childToParent = (childData) => {
    setUser(childData);
  };

  return user ? (
    <View style={styles.container}>
      <Login childToParent={childToParent} />
    </View>
  ) :
    (<View style={styles.container}>
      <Signup childToParent={childToParent} />
    </View>)
    ;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
