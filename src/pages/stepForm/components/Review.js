import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {actionTypes} from '../reducer2';
import StepperHoc, {STEPS} from '../../../components/Stepper';

const ReviewStep = ({storeProps}) => {
  const questions = useSelector(state => state.questions);
  const dispatch = useDispatch();
  const handlePrevious = () => {
    dispatch({
      type: actionTypes.PREV_STEP,
      payload: {
        stepNo: 2,
        stepName: STEPS[1],
      },
    });
  };

  const handleSubmit = () => {
    Alert.alert('Submit', 'Reset form', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () =>
          dispatch({
            type: actionTypes.SUBMIT,
          }),
      },
    ]);
  };

  return (
    <StepperHoc
      onNext={handleSubmit}
      onPrevious={handlePrevious}
      nextLabel="Submit">
      <View style={styles.container}>
        <Text style={{fontSize: 20, marginBottom: 30}}>
          Step title : Review & submit
        </Text>
      </View>
      <Text>{JSON.stringify(questions, null, 2)}</Text>
    </StepperHoc>
  );
};

export default ReviewStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
