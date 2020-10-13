import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import * as RootNavigation from '@/navigations/RootNavigator';

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
    marginTop: 10,
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

const LoginScreen = () => {
  const [userEmail, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  async function onLoginPressed() {
    try {
      await auth().signInWithEmailAndPassword(userEmail, password);
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/wrong-password') {
        alert('Wrong password !!');
      }
    }
  }

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
        onPress={() => RootNavigation.navigate('SignIn')}
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
