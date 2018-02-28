import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import Gradient from './Gradient';

class ValueGradient extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color.h !== nextProps.color.h) {
      return true;
    }
    if (this.props.color.s !== nextProps.color.s) {
      return true;
    }
    return false;
  }

  getStepColor = i => tinycolor({ ...this.props.color, v: i }).toHslString();

  render() {
    const { style, color, gradientSteps } = this.props;
    return (
      <Gradient
        style={style}
        gradientSteps={gradientSteps}
        getStepColor={this.getStepColor}
        maximumValue={1}
      />
    );
  }
}

export default ValueGradient;

ValueGradient.propTypes = {
  color: PropTypes.shape({
    h: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    v: PropTypes.number.isRequired
  }).isRequired,
  gradientSteps: PropTypes.number.isRequired
};
