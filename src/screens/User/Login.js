/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 100,
  },
  containerTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  marginFromTitle: {
    marginTop: 30,
  },
  inputBorder: {
    borderBottomColor: '#d6d5d5',
  },
});

const LoginScreen = ({ navigation }) => {
  const [userEmail, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const uid = useSelector((state) => state.user.uid);

  async function onLoginPressed() {
    try {
      await auth().signInWithEmailAndPassword(userEmail, password);
      navigation.navigate('Index', { screen: 'Plans' });
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Wrong password !!');
      }
    }
  }

  useEffect(() => {
    if (uid) {
      navigation.navigate('Index', { screen: 'Plans' });
    }
  }, [uid]);

  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Login</Text>
      <Input
        inputContainerStyle={[styles.inputBorder, styles.marginFromTitle]}
        placeholder="Email"
        leftIcon={{ type: 'font-awesome', name: 'envelope', size: 18 }}
        onChangeText={(v) => onChangeEmail(v)}
      />
      <Input
        inputContainerStyle={styles.inputBorder}
        placeholder="Password"
        secureTextEntry
        leftIcon={{ type: 'font-awesome', name: 'lock', size: 20 }}
        onChangeText={(v) => onChangePassword(v)}
      />
      <Button
        title="Create an account here"
        type="clear"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Login"
        buttonStyle={styles.button}
        type="outline"
        onPress={() => onLoginPressed()}
      />
    </View>
  );
};

export default LoginScreen;
