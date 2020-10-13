import React, { useState } from 'react';
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

const SignInScreen = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  async function onSignInPressed() {
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Sign In</Text>
      <Input
        inputContainerStyle={[styles.inputBorder, styles.marginFromTitle]}
        placeholder="Email"
        leftIcon={{ type: 'font-awesome', name: 'envelope', size: 18 }}
        onChangeText={(v) => onChangeEmail(v)}
        errorMessage="ENTER A VALID ERROR HERE"
      />
      <Input
        inputContainerStyle={styles.inputBorder}
        placeholder="Password"
        secureTextEntry
        leftIcon={{ type: 'font-awesome', name: 'lock', size: 20 }}
        onChangeText={(v) => onChangePassword(v)}
      />
      <Button
        title="Sign In"
        buttonStyle={styles.button}
        type="outline"
        onPress={() => onSignInPressed()}
      />
    </View>
  );
};

export default SignInScreen;
