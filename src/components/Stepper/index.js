import React from 'react';
import PropTypes from 'prop-types';

import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomButton} from '..';

export const STEPS = ['StepOne', 'StepTwo', 'ReviewStep'];

const StepperHoc = ({
  showPrevious,
  onNext,
  onPrevious,
  nextLabel,
  children,
  ...rest
}) => {
  const storeProps = useSelector(state => state);
  const {activeStep} = storeProps;
  const activeIndex = activeStep - 1;

  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        {STEPS.map((stepName, index) => (
          <View key={index} style={styles.singleStep}>
            <View
              key={index}
              style={[
                styles.commonStepStyle,
                index === activeIndex && styles.activeStep,
                index < activeIndex && styles.completedStep,
              ]}
            />
            {STEPS.length - 1 !== index && <View style={styles.stepLine} />}
          </View>
        ))}
      </View>
      {children}
      {/* <Text>{JSON.stringify(storeProps, null, 2)}</Text> */}
      <View
        style={[styles.footer, !showPrevious && {justifyContent: 'center'}]}>
        {showPrevious && (
          <CustomButton
            label="Previous"
            style={styles.button}
            onPress={onPrevious}
          />
        )}
        <CustomButton
          label={nextLabel}
          style={styles.button}
          onPress={onNext}
        />
      </View>
    </View>
  );
};

StepperHoc.propTypes = {
  showPrevious: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  nextLabel: PropTypes.string,
};

StepperHoc.defaultProps = {
  showPrevious: true,
  nextLabel: 'Next',
};
export default StepperHoc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  completedStep: {
    backgroundColor: 'orange',
    borderColor: 'orange',
  },
  activeStep: {
    borderColor: 'orange',
  },
  commonStepStyle: {
    height: 10,
    width: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
  stepLine: {
    height: 2,
    backgroundColor: 'gray',
    width: 150,
  },
  singleStep: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '46%',
  },
});
