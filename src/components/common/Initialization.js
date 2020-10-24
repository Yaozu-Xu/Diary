import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plansCollection from '@/requester/Plans';

const Initialization = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user.uid);

  function setPlanInStore(documentSnapshot) {
    const payload = documentSnapshot.data();
    dispatch({ type: 'SET_PLANS', payload });
  }
  useEffect(() => {
    const subscriber = plansCollection.plansDocumentSnapshot(uid, setPlanInStore);
    return () => subscriber;
  }, []);
  return (
    <></>
  );
};

export default Initialization;
