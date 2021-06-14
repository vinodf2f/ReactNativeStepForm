import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik, Field} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
//components
import {FormikInput} from '../../../components';
//Validation, utils
import {stepTwoValidationSchema} from '../validationSchema';
import {actionTypes} from '../reducer2';
import {formatQuestionToStore} from '../utils';
import {mockSubmit} from '../../../API';
import StepperHoc, {STEPS} from '../../../components/Stepper';

//set Keys here
const StepTwo = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);

  const handleNext = values => {
    try {
      mockSubmit(values).then(data => {
        dispatch({
          type: actionTypes.NEXT_STEP,
          payload: {
            stepNo: 3,
            stepName: STEPS[2],
            questions: formatQuestionToStore(values),
          },
        });
      });
    } catch (error) {
      console.log(error);
      alert(JSON.stringify(error));
    }
  };

  const handlePrevious = values => {
    dispatch({
      type: actionTypes.PREV_STEP,
      payload: {
        stepNo: 2,
        stepName: STEPS[0],
      },
    });
  };
  return (
    <Formik
      initialValues={Object.assign({}, ...questions)}
      validationSchema={stepTwoValidationSchema}
      onSubmit={handleNext}>
      {({handleSubmit}) => (
        <StepperHoc onNext={handleSubmit} onPrevious={handlePrevious}>
          <View style={styles.stepContainer}>
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
          </View>
        </StepperHoc>
      )}
    </Formik>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
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
});
