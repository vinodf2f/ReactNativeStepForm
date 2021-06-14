import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik, Field} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
//components
import {FormikInput} from '../../../components';
//Validation, utils, API
import {stepOneValidationSchema} from '../validationSchema';
import {actionTypes} from '../reducer2';
import {formatQuestionToStore} from '../utils';
import {mockSubmit} from '../../../API';
import StepperHoc, {STEPS} from '../../../components/Stepper';

const StepOne = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);

  const handleNext = values => {
    try {
      mockSubmit(values).then(data => {
        dispatch({
          type: actionTypes.NEXT_STEP,
          payload: {
            stepNo: 2,
            stepName: STEPS[1],
            questions: formatQuestionToStore(values),
          },
        });
      });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <Formik
      initialValues={Object.assign({}, ...questions)}
      validationSchema={stepOneValidationSchema}
      onSubmit={handleNext}>
      {({handleSubmit}) => (
        <StepperHoc onNext={handleSubmit} showPrevious={false}>
          <View style={styles.stepContainer}>
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
          </View>
        </StepperHoc>
      )}
    </Formik>
  );
};

export default StepOne;

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
