import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';

const Auth = () => {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(res) {
    if (res) {
      const {
        displayName, uid, email, photoURL,
      // eslint-disable-next-line no-underscore-dangle
      } = res._user;
      dispatch({
        type: 'SET_USER',
        payload: {
          displayName, uid, email, photoURL,
        },
      });
    }
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber;
  }, []);

  return (
    <></>
  );
};

export default Auth;
