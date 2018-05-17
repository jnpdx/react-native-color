import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Slider from 'react-native-slider';
import Gradient from '../gradients/Gradient';

const GradientSlider = ({
  style,
  value,
  step,
  maximumValue,
  gradient,
  onValueChange,
  thumbTintColor,
  onSlidingStart, onSlidingComplete
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.gradient}>{gradient}</View>
      <Slider
        value={value}
        step={step}
        animateTransitions
        animationType="spring"
        thumbTouchSize={{ width: 48, height: 48 }}
        maximumValue={maximumValue}
        onValueChange={onValueChange}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
        thumbStyle={[styles.thumb, { backgroundColor: thumbTintColor }]}
  	    onSlidingStart={onSlidingStart}
  	    onSlidingComplete={onSlidingComplete}
      />
    </View>
  );
};

export default GradientSlider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 32
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    borderWidth: 1,
    borderColor: 'white'
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 2,
    bottom: 2
  },
});

GradientSlider.propTypes = {
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  thumbTintColor: PropTypes.string.isRequired
};
