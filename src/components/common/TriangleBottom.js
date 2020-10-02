import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  triangle: {
    position: 'absolute',
    bottom: -9,
    left: 0,
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderTopColor: '#c4c3c3',
    borderRightWidth: 6,
    borderRightColor: 'transparent',
    borderLeftWidth: 6,
    borderLeftColor: 'transparent',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
});

const TriangleButtom = (props) => {
  const { left } = props;
  return (
    <View style={[styles.triangle, { left }]} />
  );
};

TriangleButtom.propTypes = {
  left: PropTypes.number,
};

TriangleButtom.defaultProps = {
  left: 0,
};

export default TriangleButtom;
