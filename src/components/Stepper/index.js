import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const steps = ['StepOne', 'StepTwo', 'ReviewStep'];

const StepperHoc = ({children, activeStep, ...rest}) => (
  <View style={styles.container}>
    <View style={styles.stepContainer}>
      {steps.map((stepName, index) => (
        <View
          key={index}
          style={[
            styles.commonStepStyle,
            activeStep === stepName && styles.activeStep,
          ]}>
          <Text
            style={[
              activeStep === stepName
                ? styles.activeStepLabel
                : styles.stepLabel,
            ]}>
            {stepName}
          </Text>
        </View>
      ))}
    </View>
    {children}
  </View>
);

export default StepperHoc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 20,
  },

  activeStep: {
    backgroundColor: 'orange',
  },
  commonStepStyle: {
    fontSize: 20,
    borderRadius: 20,
    padding: 15,
    borderRightWidth: 1,
  },
  stepLabel: {
    color: 'black',
  },
  activeStepLabel: {},
});
