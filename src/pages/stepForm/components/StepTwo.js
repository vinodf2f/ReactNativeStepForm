import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik, Field} from 'formik';
//components
import {CustomButton, FormikInput} from '../../../components';
//Validation, utils
import {stepTwoValidationSchema} from '../validationSchema';
import {actionTypes} from '../reducer';
import {formatQuestionToStore} from '../utils';

//set Keys here
const initialValues = {question3: '', question4: ''};
const StepTwo = ({storeProps, dispatch}) => {
  const handleNext = values => {
    dispatch({
      type: actionTypes.NEXT_STEP,
      payload: {
        stepNo: 3,
        stepName: 'ReviewStep',
        questions: formatQuestionToStore(values),
      },
    });
  };
  return (
    <View style={styles.stepContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={stepTwoValidationSchema}
        onSubmit={handleNext}>
        {({values, handleSubmit}) => (
          <>
            <View style={styles.questionBox}>
              <Text style={styles.questionLabel}>Question 3</Text>
              <Field
                component={FormikInput}
                name="question3"
                placeholder=" question3"
              />
            </View>
            <View style={styles.questionBox}>
              <Text style={styles.questionLabel}>Question 4</Text>
              <Field
                component={FormikInput}
                name="question4"
                placeholder="question4"
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

export default StepTwo;

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
