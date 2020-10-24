import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Overlay, Input, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import TimeSelector from '@/components/common/TimeSelector';
import planCollection from '@/requester/Plans';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 20,
    width,
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    borderColor: '#fff',
    backgroundColor: '#e4e3e3',
  },
  inputText: {
    marginLeft: 10,
  },
  button: {
    marginTop: 15,
    marginRight: 20,
    display: 'flex',
    alignItems: 'flex-end',
  },
});

const NewPlanOverlay = (props) => {
  const { details } = props;
  const { date, pid } = details;
  const [task, setTask] = useState();
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.details);
  const uid = useSelector((state) => state.user.uid);
  const visible = useSelector((state) => state.display.newPlanToggle);
  const hour = useSelector((state) => state.time.hour);
  const minute = useSelector((state) => state.time.minute);

  function noPlanToday() {
    return plans.filter((plan) => plan.pid === pid).length === 0;
  }

  function successCallBack() {
    alert('success');
  }

  function onSubmit() {
    const dateFormat = `${date} ${hour}:${minute}`;
    const data = {
      alarm: false, status: false, date: dateFormat, name: task,
    };
    if (noPlanToday(pid)) {
      planCollection.plansDocumentSetter(uid, { pid, date });
      planCollection.tasksDocumentCreator(uid, pid, data, successCallBack);
    } else {
      planCollection.tasksDocumentSetter(uid, pid, data, successCallBack);
    }
  }

  function onBackdropPress() {
    dispatch({ type: 'PLAN_TOOGLE' });
    dispatch({ type: 'SET_MINUTE', payload: null });
    dispatch({ type: 'SET_HOUR', payload: null });
    setTask(null);
  }

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={() => onBackdropPress()}
    >
      <>
        <Input
          placeholder="Task name"
          inputStyle={styles.inputText}
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          onChangeText={(v) => setTask(v)}
        />
        <TimeSelector date={date} />
        <Button
          containerStyle={styles.button}
          title="Submit"
          type="clear"
          onPress={() => onSubmit()}
        />
      </>
    </Overlay>
  );
};

NewPlanOverlay.propTypes = {
  details: PropTypes.shape({
    date: PropTypes.string,
    pid: PropTypes.string,
  }),
};

NewPlanOverlay.defaultProps = {
  details: PropTypes.shape({
    date: '',
    pid: '',
  }),
};

export default NewPlanOverlay;
