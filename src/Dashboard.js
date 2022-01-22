import React, { useState } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
} from 'react-native';

const Dashboard = () => {
  const [profile, setProfile] = useState(false);
  const [problem, setProblem] = useState(false);
  const [explore, setExplore] = useState(false);
  const [clicked, setClicked] = useState(false)

  const setProfileFn = () => {
    setProfile(true);
    setProblem(false);
    setExplore(false);
    setClicked(true)
  };

  const setProblemFn = () => {
    setProfile(false);
    setProblem(true);
    setExplore(false);
    setClicked(true)
  };

  const setExploreeFn = () => {
    setProfile(false);
    setProblem(false);
    setExplore(true);
    setClicked(true)
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Profile" onPress={setProfileFn} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Problems" onPress={setProblemFn} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Explore" onPress={setExploreeFn} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text>{!clicked ? 'Click any tab above': ''}
          {profile ? 'Here is profile section' : ''}
          {problem ? 'Here is problems section' : ''}
          {explore ? 'Here is explore section' : ''}
        </Text>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    width: 300,
    height: 10,
    paddingBottom: 400,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    margin: 5,
  },
  textContainer: {
    color: '#000',
  },
});
