import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik, Field} from 'formik';
//components
import {CustomButton, FormikInput} from '../../../components';
//Validation, utils
import {stepOneValidationSchema} from '../validationSchema';
import {actionTypes} from '../reducer';
import {formatQuestionToStore} from '../utils';

//set questions here
const initialValues = {question1: '', question2: ''};
const StepOne = ({storeProps, dispatch}) => {
  const handleNext = values => {
    dispatch({
      type: actionTypes.NEXT_STEP,
      payload: {
        stepNo: 2,
        stepName: 'StepTwo',
        questions: formatQuestionToStore(values),
      },
    });
  };
  return (
    <View style={styles.stepContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={stepOneValidationSchema}
        onSubmit={handleNext}>
        {({values, handleSubmit}) => (
          <>
            <View style={styles.questionBox}>
              <Text style={styles.questionLabel}>Question 1</Text>
              <Field
                component={FormikInput}
                name="question1"
                placeholder=" question1"
              />
            </View>
            <View style={styles.questionBox}>
              <Text style={styles.questionLabel}>Question 2</Text>
              <Field
                component={FormikInput}
                name="question2"
                placeholder="question2"
              />
            </View>
            <CustomButton
              label="NEXT"
              onPress={handleSubmit}
              style={styles.button}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default StepOne;

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  questionLabel: {
    fontSize: 16,
    marginVertical: 10,
  },

  questionBox: {
    width: '100%',
    marginVertical: 10,
  },

  button: {
    marginTop: 50,
  },
});
