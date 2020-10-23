import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import plansCollection from '@/requester/Plans';

const Initialization = () => {
  const dispatch = useDispatch();
  const uid = '46JDW7egRJOUycYK5HYpfvCdy3j2';

  function setPlanInStore(documentSnapshot) {
    const payload = documentSnapshot.data();
    dispatch({ type: 'SET_PLANS', payload });
  }
  useEffect(() => {
    const subscriber = plansCollection.plansDocumentSnapshot(uid, setPlanInStore);
    return subscriber;
  }, []);
  return (
    <></>
  );
};

export default Initialization;
